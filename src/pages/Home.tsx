import { BackgroundImageBeams } from "../components/BackgroundImage";
import { Button } from "../components/ui/button";

export function Home() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <BackgroundImageBeams imagePath="/hero1.jpg" />
      <Button>Click me</Button>
    </div>
  );
} 