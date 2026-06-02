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
export default function ModeloPDF() {
return (
// Document = o arquivo PDF inteiro
<Document>
{/* Page = uma página A4 */}
<Page size="A4" style={estilos.pagina}>
{/* View = uma caixa, como a div do HTML */}
<View>
{/* Text = todo texto fica dentro de um Text */}
<Text style={estilos.nome}>Cosme Teixeira Silva</Text>
<Text style={estilos.cargo}>Professor Senac MG</Text>
<Text style={estilos.texto}>Email: cosme@email.com</Text>
<Text style={estilos.texto}>Telefone: (35) 9 9999-0000</Text>
<Text style={estilos.texto}>Cidade: Lavras, MG</Text>
</View>
</Page>
</Document>
);
}
