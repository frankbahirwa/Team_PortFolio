import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-12 py-6 bg-gray-50 text-gray-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} DevTeam AI — Built with ❤️ by Team10
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="/team" className="hover:underline">Meet the Team</Link>
          <a
            href="https://github.com/your-org/devteam-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
