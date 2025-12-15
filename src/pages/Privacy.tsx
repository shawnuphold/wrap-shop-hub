import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-display text-gradient mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">Effective Date: January 1, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Magic Shine LLC ("Company," "we," "us," or "our") operates FilmOps, a cloud-based CRM and business management platform for vehicle wrap shops, PPF installers, and window tint shops. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-display text-foreground/90 mb-2">2.1 Account Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you create an account, we collect your name, email address, phone number, business name, and billing information.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">2.2 Business Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may upload or create data within the Service including customer contact information, job details, quotes, invoices, design proofs, notes, and communications. This data belongs to you and is stored to provide the Service.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">2.3 Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We automatically collect information about how you interact with the Service, including IP address, browser type, device information, pages visited, features used, and timestamps.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">2.4 Third-Party Integration Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you connect third-party services (such as QuickBooks, Twilio, or payment processors), we may receive data from those services as necessary to provide the integration. We do not store your third-party credentials; we use secure OAuth tokens where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve the Service</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative notifications, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze usage trends to improve user experience</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">4.1 Service Providers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share information with third-party vendors who perform services on our behalf, such as hosting, payment processing, and analytics. These providers are contractually obligated to protect your information.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">4.2 Third-Party Integrations</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you enable integrations with third-party services (QuickBooks, Twilio, payment processors), data is shared with those services as necessary to provide the integration. Your use of those services is governed by their privacy policies.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">4.3 Legal Requirements</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may disclose information if required to do so by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">4.4 Business Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information, including encryption in transit (TLS/SSL) and at rest, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information for as long as your account is active or as needed to provide the Service. If you terminate your account, we will retain your data for 30 days to allow for data export, after which it may be permanently deleted. We may retain certain information as required by law or for legitimate business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">7. Your Rights and Choices</h2>

              <h3 className="text-xl font-display text-foreground/90 mb-2">7.1 Access and Export</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may access and export your data at any time through the Service.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">7.2 Correction</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may update or correct your account information through your account settings.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">7.3 Deletion</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may request deletion of your account and associated data by contacting us. Some information may be retained as required by law.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">7.4 Communications</h3>
              <p className="text-muted-foreground leading-relaxed">
                You may opt out of promotional communications by following the unsubscribe instructions in those messages. You cannot opt out of transactional or administrative communications related to your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">8. Multi-Tenant Architecture</h2>
              <p className="text-muted-foreground leading-relaxed">
                FilmOps is a multi-tenant platform, meaning multiple customers share the same infrastructure. Your data is logically isolated from other customers' data using secure tenant separation. Other customers cannot access your data, and you cannot access theirs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">9. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to maintain your session, remember your preferences, and analyze usage patterns. You may configure your browser to reject cookies, but this may affect your ability to use certain features of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child, we will take steps to delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">11. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in the United States, where our servers are located. By using the Service, you consent to the transfer of your information to the United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">12. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website or by email. Your continued use of the Service after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p className="font-medium text-foreground">Magic Shine LLC</p>
                <p>Email: <a href="mailto:privacy@filmops.io" className="text-primary hover:text-primary/80">privacy@filmops.io</a></p>
                <p>Website: <a href="https://filmops.io" className="text-primary hover:text-primary/80">https://filmops.io</a></p>
              </div>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border/20 text-center text-muted-foreground/60 text-sm">
            © 2025 FilmOps. All rights reserved.
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Privacy;
