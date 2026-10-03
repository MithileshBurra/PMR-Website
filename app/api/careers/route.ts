import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "career-applications.json");

function saveApplicationToDisk(applicationData: any) {
  try {
    let applications = [];
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      applications = JSON.parse(fileContent || "[]");
    }
    applications.unshift({
      id: `APP-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      ...applicationData,
    });
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(applications, null, 2), "utf-8");
    console.log(`[CAREER APPLICATION SAVED TO DISK] Saved to ${DATA_FILE_PATH}`);
  } catch (err) {
    console.error("Error saving application to disk:", err);
  }
}

export async function GET() {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileContent = fs.readFileSync(DATA_FILE_PATH, "utf-8");
      const applications = JSON.parse(fileContent || "[]");
      return NextResponse.json({ success: true, count: applications.length, data: applications });
    }
    return NextResponse.json({ success: true, count: 0, data: [] });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Failed to read applications" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const department = formData.get("department")?.toString() || "";
    const designation = formData.get("designation")?.toString() || "";
    const qualification = formData.get("qualification")?.toString() || "";
    const regNumber = formData.get("regNumber")?.toString() || "";
    const experience = formData.get("experience")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const resumeFile = formData.get("resume") as File | null;

    if (!fullName || !email || !phone || !department || !qualification) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const applicationRecord = {
      fullName,
      email,
      phone,
      department,
      designation,
      qualification,
      regNumber,
      experience,
      message,
      resumeName: resumeFile?.name || null,
      resumeSize: resumeFile ? `${Math.round(resumeFile.size / 1024)} KB` : null,
    };

    // 1. Always save to local JSON storage first so NO submission is ever lost!
    saveApplicationToDisk(applicationRecord);

    const recipientEmail = process.env.CAREER_EMAIL_RECIPIENT || "mithileshburra@ekluvya.guru";
    const recipientWhatsApp = process.env.CAREER_WHATSAPP_NUMBER || "918074485411";

    // Build WhatsApp message text & URL
    const waText = 
      `🏥 *PMRIMS DOCTOR FACULTY APPLICATION*\n\n` +
      `👤 *Candidate:* ${fullName}\n` +
      `📧 *Email:* ${email}\n` +
      `📱 *Phone:* ${phone}\n` +
      `🩺 *Department:* ${department}\n` +
      `🎓 *Designation:* ${designation || "N/A"}\n` +
      `📜 *Qualification:* ${qualification}\n` +
      `🆔 *Reg No:* ${regNumber || "N/A"}\n` +
      `⏳ *Experience:* ${experience || "N/A"} Years\n` +
      `${message ? `📝 *Note:* ${message}\n` : ""}` +
      `${resumeFile?.name ? `📄 *CV:* ${resumeFile.name}\n` : ""}\n` +
      `Submitted via PMRIMS Recruitment Portal.`;

    const whatsappUrl = `https://wa.me/${recipientWhatsApp}?text=${encodeURIComponent(waText)}`;

    // Setup Nodemailer Transporter
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; padding: 20px; }
            .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
            .header { background: #2563eb; color: #ffffff; padding: 28px; text-align: center; }
            .header h2 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
            .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.9; text-transform: uppercase; tracking: 1px; }
            .content { padding: 30px; }
            .section-title { font-size: 14px; font-weight: 700; text-transform: uppercase; color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px; margin-bottom: 16px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
            .item { background: #f1f5f9; padding: 12px 16px; border-radius: 8px; }
            .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; margin-bottom: 4px; }
            .value { font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word; }
            .full-width { grid-column: span 2; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>PMRIMS Doctor Faculty Application</h2>
              <p>Patnam Mahender Reddy Institute of Medical Sciences</p>
            </div>
            <div class="content">
              <p>A new doctor application has been submitted through the PMRIMS portal:</p>
              
              <div class="section-title">Personal & Contact Details</div>
              <div class="grid">
                <div class="item">
                  <div class="label">Full Name</div>
                  <div class="value">${fullName}</div>
                </div>
                <div class="item">
                  <div class="label">Email Address</div>
                  <div class="value">${email}</div>
                </div>
                <div class="item">
                  <div class="label">Phone / WhatsApp</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="item">
                  <div class="label">Reg Number (KMC/NMC)</div>
                  <div class="value">${regNumber || "N/A"}</div>
                </div>
              </div>

              <div class="section-title">Professional Details</div>
              <div class="grid">
                <div class="item">
                  <div class="label">Department</div>
                  <div class="value">${department}</div>
                </div>
                <div class="item">
                  <div class="label">Designation Applied For</div>
                  <div class="value">${designation || "Not Specified"}</div>
                </div>
                <div class="item">
                  <div class="label">Highest Qualification</div>
                  <div class="value">${qualification}</div>
                </div>
                <div class="item">
                  <div class="label">Total Experience</div>
                  <div class="value">${experience ? `${experience} Years` : "Not Specified"}</div>
                </div>
              </div>

              ${
                message
                  ? `
                <div class="section-title">Additional Message / Note</div>
                <div class="item full-width">
                  <div class="value">${message}</div>
                </div>
              `
                  : ""
              }

              ${
                resumeFile && resumeFile.name
                  ? `
                <div class="section-title">Resume Attachment</div>
                <div class="item full-width">
                  <div class="value">Attached File: ${resumeFile.name} (${Math.round(resumeFile.size / 1024)} KB)</div>
                </div>
              `
                  : ""
              }
            </div>
            <div class="footer">
              This email was generated automatically from the PMRIMS Careers Application Form. Target Recipient: ${recipientEmail}
            </div>
          </div>
        </body>
      </html>
    `;

    let emailSent = false;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const attachments = [];
        if (resumeFile && resumeFile.size > 0) {
          const buffer = Buffer.from(await resumeFile.arrayBuffer());
          attachments.push({
            filename: resumeFile.name,
            content: buffer,
          });
        }

        await transporter.sendMail({
          from: `"PMRIMS Careers" <${smtpUser}>`,
          to: recipientEmail,
          subject: `New Doctor Application: ${fullName} - ${department}`,
          html: htmlContent,
          attachments,
        });
        emailSent = true;
      } catch (err: any) {
        console.error("Failed to dispatch email via Nodemailer:", err);
      }
    }

    return NextResponse.json({
      success: true,
      emailSent,
      recipientEmail,
      recipientWhatsApp,
      whatsappUrl,
      message: emailSent
        ? `Application submitted! Email notification dispatched to ${recipientEmail}.`
        : `Application recorded and saved successfully!`,
    });
  } catch (error: any) {
    console.error("Error processing career application:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting your application. Please try again.",
      },
      { status: 500 }
    );
  }
}
