import { parametrosProduto } from "@/content/dados-empresa";

/**
 * Tabela de verdade para os parametros do produto, como pede a secao 5 do briefing:
 * numero nao vira card colorido. Separacao por borda de 1px, sem zebrado berrante.
 * A mesma tabela e usada na Home e na pagina Legal Equity.
 */
export function TabelaDeParametros() {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">
        Parâmetros da operação de crédito com garantia de direitos creditórios judiciais
      </caption>
      <tbody>
        {parametrosProduto.map((linha) => (
          <tr key={linha.rotulo} className="border-t border-line last:border-b">
            <th
              scope="row"
              className="w-2/5 py-4 pr-6 align-top font-heading text-sm font-semibold text-gray"
            >
              {linha.rotulo}
            </th>
            <td className="py-4 align-top text-base text-ink">{linha.valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
