import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100dvh-64px)] flex-col items-center justify-center">
      <h1 className="mb-6 text-8xl font-bold">404</h1>
      <h2 className="mb-2 text-xl font-semibold">Page Not Found</h2>
      <p className="mb-6 opacity-80">Could not find requested resource</p>
      <Button asChild>
        <Link href="/" className="font-semibold">
          Return Home
        </Link>
      </Button>
    </div>
  );
}
