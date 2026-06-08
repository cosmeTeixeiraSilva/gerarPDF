import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const estilos = StyleSheet.create({
  pagina: {
    padding: 40,
    backgroundColor: "#f5f5f5",
  },

  card: {
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 12,
    padding: 20,
    backgroundColor: "#fff",
  },

  tituloPrincipal: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
  },

  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    marginVertical: 10,
  },

  quadrado: {
    borderWidth: 2,
    borderColor: "#444",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  circulo: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "#444",
    backgroundColor: "#d9d9d9",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },

  secao: {
    marginTop: 15,
  },

  linhaElementos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  box: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#666",
    padding: 10,
    borderRadius: 6,
    textAlign: "center",
  },

  texto: {
    fontSize: 11,
    textAlign: "center",
  },
});

export default function PDFelementos() {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <View style={estilos.card}>

          <Text style={estilos.tituloPrincipal}>
            Elementos Gráficos
          </Text>

          <View style={estilos.linha} />

          <View style={estilos.quadrado}>
            <View style={estilos.circulo}>
              <Text style={estilos.titulo}>Elemento 1</Text>
            </View>
          </View>

          <View style={estilos.linha} />

          <View style={estilos.secao}>
            <Text style={estilos.titulo}>
              Elementos Adicionais
            </Text>

            <View style={estilos.linhaElementos}>
              <View style={estilos.box}>
                <Text style={estilos.texto}>Quadrado</Text>
              </View>

              <View style={estilos.box}>
                <Text style={estilos.texto}>Retângulo</Text>
              </View>

              <View style={estilos.box}>
                <Text style={estilos.texto}>Bloco</Text>
              </View>
            </View>
          </View>

          <View style={estilos.linha} />

          <Text style={estilos.texto}>
            Exemplo de organização utilizando linhas divisórias,
            cartões, círculos e caixas alinhadas.
          </Text>

        </View>
      </Page>
    </Document>
  );
}
