"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Shield } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground />
      </div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: December 29, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Section 1 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Codiv ("the Service"), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to these Terms of Service, please do not use the Service.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Codiv is an AI-powered code editor platform that enables users to create, modify, and build applications
                using natural language prompts. The Service includes features such as GitHub integration, live preview,
                code generation, and other development tools.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access certain features of the Service, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your account information to keep it accurate and current</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">4. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the Service in any way that violates applicable laws or regulations</li>
                <li>Generate, upload, or share malicious code, viruses, or harmful software</li>
                <li>Attempt to gain unauthorized access to the Service or its related systems</li>
                <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                <li>Use the Service to harass, abuse, or harm another person</li>
                <li>Impersonate or attempt to impersonate Codiv, a Codiv employee, another user, or any other person or entity</li>
                <li>Use any robot, spider, or other automatic device to access the Service</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">5. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service and its original content, features, and functionality are owned by Codiv and are protected
                by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of any code you create using the Service. By using the Service, you grant Codiv
                a limited license to process and store your code solely for the purpose of providing the Service to you.
              </p>
            </div>

            {/* Section 6 - With Alert Box */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">6. AI-Generated Content</h2>
              <Alert className="border-amber-500/50 bg-amber-500/10">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                <AlertDescription className="text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> The Service uses artificial intelligence to generate code and other content.
                  AI-generated code may not always be error-free or optimal for your specific use case. You are responsible for
                  reviewing, testing, and validating all AI-generated code before deployment.
                </AlertDescription>
              </Alert>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>AI-generated code may not always be error-free or optimal for your specific use case</li>
                <li>You are responsible for reviewing, testing, and validating all AI-generated code before deployment</li>
                <li>Codiv makes no warranties regarding the accuracy, completeness, or functionality of AI-generated content</li>
                <li>You should not use AI-generated code in critical systems without thorough testing and validation</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">7. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy. We collect, use, and protect your
                personal information in accordance with applicable data protection laws. Please review our Privacy
                Policy to understand our practices.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">8. Payment and Billing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain features of the Service may require payment. If you choose to use paid features, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide current, complete, and accurate purchase and account information</li>
                <li>Update your account information promptly to keep it current</li>
                <li>Pay all charges incurred by you at the prices in effect when such charges are incurred</li>
                <li>Be responsible for all taxes associated with the Service</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to change our pricing at any time. Any price changes will be communicated to you
                in advance.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">9. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide uninterrupted service, we do not guarantee that the Service will be available
                at all times. The Service may be subject to interruptions, including for maintenance, updates, or due to
                factors beyond our control.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Codiv shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
                indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </div>

            {/* Section 11 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">11. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either
                express or implied. Codiv disclaims all warranties, including but not limited to warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            {/* Section 12 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">12. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or
                liability, for any reason, including if you breach these Terms of Service. Upon termination, your right
                to use the Service will immediately cease.
              </p>
            </div>

            {/* Section 13 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">13. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
                will be determined at our sole discretion. By continuing to access or use our Service after revisions
                become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Section 14 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">14. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
                Codiv operates, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Section 15 */}
            <div className="space-y-4 pb-6 border-b border-border/50">
              <h2 className="text-2xl font-semibold text-foreground">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Email: support@codiv.dev
              </p>
            </div>

            {/* Final Note - With Alert Box */}
            <div className="pt-4">
              <Alert className="border-primary/50 bg-primary/10">
                <Shield className="h-4 w-4 text-primary" />
                <AlertDescription className="text-muted-foreground">
                  <strong className="text-foreground">Agreement Acknowledgment:</strong> By using Codiv, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service.
                </AlertDescription>
              </Alert>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  )
}
