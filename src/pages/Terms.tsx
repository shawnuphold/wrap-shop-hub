import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">Effective Date: January 1, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using FilmOps (the "Service"), operated by Magic Shine LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                FilmOps is a cloud-based customer relationship management (CRM) and business management platform designed for vehicle wrap shops, paint protection film (PPF) installers, window tint shops, and related automotive service businesses. The Service includes lead management, job tracking, quoting, invoicing, proof approval workflows, and optional third-party integrations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">4. Subscription and Payment</h2>

              <h3 className="text-xl font-display text-foreground/90 mb-2">4.1 Fees</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Access to the Service requires a paid subscription. Subscription fees are billed in advance on a monthly or annual basis, depending on your selected plan. All fees are non-refundable except as expressly stated in these Terms.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">4.2 Free Trial</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may offer a free trial period. At the end of the trial, your account will be charged unless you cancel before the trial expires.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">4.3 Price Changes</h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify subscription fees upon 30 days' notice. Continued use of the Service after a price change constitutes acceptance of the new pricing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">5. Your Data</h2>

              <h3 className="text-xl font-display text-foreground/90 mb-2">5.1 Ownership</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain all rights to the data you upload or create within the Service ("Your Data"). We do not claim ownership of Your Data.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">5.2 License to Us</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You grant us a limited license to use, store, and process Your Data solely to provide the Service to you.
              </p>

              <h3 className="text-xl font-display text-foreground/90 mb-2">5.3 Data Isolation</h3>
              <p className="text-muted-foreground leading-relaxed">
                FilmOps is a multi-tenant platform. Your Data is logically isolated from other customers' data and is never shared with or accessible by other customers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">6. Third-Party Integrations</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service may integrate with third-party services including but not limited to QuickBooks, Twilio, Stripe, and Square. These integrations require you to maintain your own accounts with these providers ("Bring Your Own Account" or "BYOA" model). We are not responsible for the availability, accuracy, or performance of third-party services. Your use of third-party services is subject to their respective terms of service and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">7. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to the Service or its related systems</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Upload or transmit viruses, malware, or other malicious code</li>
                <li>Resell, sublicense, or redistribute the Service without our written consent</li>
                <li>Use the Service to store or transmit infringing, defamatory, or otherwise unlawful material</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service, including its original content, features, and functionality, is owned by Magic Shine LLC and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">9. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. WE DISCLAIM ALL WARRANTIES INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed uppercase text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MAGIC SHINE LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">11. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Magic Shine LLC, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising out of or related to your use of the Service, your violation of these Terms, or your violation of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">12. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate your access to the Service at any time for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease. You may export Your Data prior to termination. We will retain Your Data for 30 days following termination, after which it may be permanently deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">13. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website or by email. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">14. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in Florida.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-foreground mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p className="font-medium text-foreground">Magic Shine LLC</p>
                <p>Email: <a href="mailto:support@filmops.io" className="text-primary hover:text-primary/80">support@filmops.io</a></p>
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

export default Terms;
