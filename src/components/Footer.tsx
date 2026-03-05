export function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-500 dark:text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} Oyewole Ajibola, RN, RM, BNSc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
