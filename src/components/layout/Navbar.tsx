import Container from "./Container";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <div>Navigation</div>
      </Container>
    </header>
  );
}
