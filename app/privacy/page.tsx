import { Shield, Mail, Database, Lock, Eye, UserCheck, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 mb-8">
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-0">
                At Munch, your privacy is our priority. We believe in complete transparency about how we handle your data. 
                The short version: <strong>We don&apos;t collect, store, or share your personal data. Period.</strong>
              </p>
            </div>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Information We Collect</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>None.</strong> Munch operates entirely on your device. We do not collect, store, or transmit any personal information, food photos, or usage data to our servers or any third parties.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                The only network connection required is for the initial AI-powered food recognition, which processes your photo through our secure API without storing any images or personal data.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">How Your Data Stays Private</h2>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>On-Device Storage:</strong> All your meal tracking, calorie calculations, and exercise conversions are stored locally on your device only.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>No Account Required:</strong> We don&apos;t require registration, login, or any personal information to use Munch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>No Cloud Sync:</strong> Your data never leaves your device. There&apos;s no cloud backup or synchronization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Photo Processing:</strong> Food photos are analyzed in real-time and immediately discarded. We never store your images.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Food Recognition Process</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                When you take a photo of your food:
              </p>
              <ol className="space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                <li>1. The image is temporarily processed through our secure AI API</li>
                <li>2. The API returns only the food identification and calorie estimate</li>
                <li>3. The image is immediately deleted from our processing pipeline</li>
                <li>4. No image data, metadata, or personal information is retained</li>
              </ol>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Your Rights and Control</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Since all data is stored locally on your device, you have complete control:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Delete Anytime:</strong> Uninstalling Munch completely removes all your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>Export Your Data:</strong> Use the app&apos;s export feature to save your tracking history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span><strong>No Data Requests Needed:</strong> Since we don&apos;t have your data, there&apos;s nothing to request</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Third-Party Services</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Munch does not integrate with or share data with any third-party services, including:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• No analytics or tracking services</li>
                <li>• No advertising networks</li>
                <li>• No social media integrations</li>
                <li>• No marketing platforms</li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Data Retention</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>We retain nothing.</strong> When you use Munch:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Photos are processed and immediately deleted</li>
                <li>• No server logs containing personal information</li>
                <li>• No backup copies of your data</li>
                <li>• No data sharing with partners (we don&apos;t have any)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Munch is designed to be safe for users of all ages. Since we don&apos;t collect any personal information, 
                children can safely use the app with parental permission according to your device&apos;s parental control settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                If we ever change our privacy practices (though we don&apos;t plan to), we&apos;ll update this policy and the 
                &quot;Last updated&quot; date. Any significant changes will be communicated through app updates.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">Contact Us</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions about this Privacy Policy or Munch&apos;s privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 mt-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Steady Wins Tech</p>
                <a 
                  href="mailto:munch@steadywinstech.com"
                  className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
                >
                  munch@steadywinstech.com
                </a>
              </div>
            </section>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 mt-8">
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-0">
                🎯 <strong>Bottom Line:</strong> Your data is yours. We can&apos;t see it, sell it, or share it because we never have it. 
                That&apos;s our promise to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}