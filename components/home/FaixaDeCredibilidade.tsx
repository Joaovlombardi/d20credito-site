import { Landmark, ReceiptText, Smartphone, Zap } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { credibilidade } from "@/content/home";

/* Icones em traco fino, monocromaticos, do mesmo conjunto. Nunca coloridos e
   nunca dentro de circulo colorido. */
const icones = {
  digital: Smartphone,
  pix: Zap,
  cet: ReceiptText,
  banco: Landmark,
} as const;

export function FaixaDeCredibilidade() {
  return (
    <section aria-label="Informações da operação" className="border-y border-line bg-surface">
      <Container className="py-8">
        <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {credibilidade.map((item) => {
            const Icone = icones[item.icone];
            return (
              <li key={item.texto} className="flex items-start gap-3">
                <Icone
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-forest"
                />
                <span className="text-sm text-gray">{item.texto}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
