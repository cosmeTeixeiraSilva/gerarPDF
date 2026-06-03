// Importamos as peças que vamos usar
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
// StyleSheet.create cria os estilos (como CSS, mas em objeto JS)
const estilos = StyleSheet.create({
pagina: { padding: 40 }, // espaço interno da folha
nome: { fontSize: 24, backgroundColor: "lightgray",borderRadius: 10, padding: 10,

 }, // tamanho do nome
cargo: { fontSize: 14, color: "grey", marginBottom: 10 }, // cargo com linha embaixo
texto: { fontSize: 12, marginBottom: 4 }, // linhas de contato
});
// Componente que descreve o nosso PDF
export default function ModeloPDFDinamico({ dados }) {
return (
// Document = o arquivo PDF inteiro
<Document>
{/* Page = uma página A4 */}
<Page size="A4" style={estilos.pagina}>
{/* View = uma caixa, como a div do HTML */}
<View>
{/* Text = todo texto fica dentro de um Text */}
<Text style={estilos.nome}>{dados.nome}</Text>
<Text style={estilos.cargo}>{dados.cargo}</Text>
<Text style={estilos.texto}>Email: {dados.email}</Text>
<Text style={estilos.texto}>Habilidades: {dados.habilidades}</Text>
</View>
</Page>
</Document>
);
}
