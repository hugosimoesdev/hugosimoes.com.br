import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-6">
      <div className="w-full max-w-md px-4 sm:px-0">
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="relative h-28 w-28 sm:h-44 sm:w-44 overflow-hidden rounded-full border-4 border-primary/10 shadow-xl">
            <Image
              src="/hugo.jpeg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-tight">
            Hugo Simões
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-center text-xl text-muted-foreground">
              Software Engineer
            </p>
            <div className="flex items-center mt-1 space-x-1.5">
              <span className="text-center text-muted-foreground">
                📍 Based in Brazil
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Link
            href="https://www.linkedin.com/in/hugosimoess/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="group overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Button
                variant="ghost"
                className="w-full justify-center gap-3 text-xl font-medium transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:font-bold transition-all duration-300">
                  LinkedIn
                </span>
              </Button>
            </Card>
          </Link>

          <Link
            href="https://github.com/hugosimoesdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="group overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Button
                variant="ghost"
                className="w-full justify-center gap-3 text-xl font-medium transition-all duration-300"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:font-bold transition-all duration-300">
                  GitHub
                </span>
              </Button>
            </Card>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/cv-pt-br.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-center gap-2 text-base font-medium transition-all duration-300 sm:text-lg"
                >
                  <Download className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:font-bold transition-all duration-300">
                    CV (PT-BR)
                  </span>
                </Button>
              </Card>
            </Link>

            <Link
              href="/cv-en-us.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-center gap-2 text-base font-medium transition-all duration-300 sm:text-lg"
                >
                  <Download className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:font-bold transition-all duration-300">
                    CV (EN-US)
                  </span>
                </Button>
              </Card>
            </Link>
          </div>
        </div>

        <footer className="pt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} • Hugo Simões</p>
        </footer>
      </div>
    </main>
  );
}
