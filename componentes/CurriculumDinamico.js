import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },

  sidebar: {
    width: "30%",
    backgroundColor: "#18181B",
    padding: 25,
    color: "#FFFFFF",
  },

  content: {
    width: "70%",
    padding: 30,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },

  role: {
    fontSize: 12,
    color: "#D4D4D8",
    marginBottom: 20,
  },

  sectionTitleSidebar: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textTransform: "uppercase",
  },

  sidebarText: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#18181B",
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E7",
  },

  summary: {
    fontSize: 11,
    lineHeight: 1.7,
    color: "#3F3F46",
    marginBottom: 20,
  },

  jobContainer: {
    marginBottom: 18,
  },

  company: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#18181B",
  },

  period: {
    fontSize: 10,
    color: "#71717A",
    marginBottom: 5,
  },

  description: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#3F3F46",
  },

  skill: {
    fontSize: 10,
    backgroundColor: "#27272A",
    padding: 5,
    marginBottom: 5,
    borderRadius: 4,
  },
});

export default function CurriculoDinamico({ dados }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* COLUNA ESQUERDA */}
        <View style={styles.sidebar}>

          <Text style={styles.name}>
            {dados.nome}
          </Text>

          <Text style={styles.role}>
            {dados.cargo}
          </Text>

          <Text style={styles.sectionTitleSidebar}>
            Contato
          </Text>

          <Text style={styles.sidebarText}>
             {dados.email}
          </Text>

          <Text style={styles.sidebarText}>
             {dados.celular}
          </Text>

          <Text style={styles.sidebarText}>
             Lavras - MG
          </Text>

          <Text style={styles.sidebarText}>
             github.com/cosme
          </Text>

          <Text style={styles.sectionTitleSidebar}>
            Competências
          </Text>

          <Text style={styles.skill}>Node.js</Text>
          <Text style={styles.skill}>React</Text>
          <Text style={styles.skill}>Next.js</Text>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>SQL</Text>
          <Text style={styles.skill}>Prisma ORM</Text>
          <Text style={styles.skill}>Docker</Text>
          <Text style={styles.skill}>Git</Text>

          <Text style={styles.sectionTitleSidebar}>
            Idiomas
          </Text>

          <Text style={styles.sidebarText}>
            Português (Nativo)
          </Text>

          <Text style={styles.sidebarText}>
            Inglês (Intermediário)
          </Text>

        </View>

        {/* COLUNA DIREITA */}
        <View style={styles.content}>

          <Text style={styles.sectionTitle}>
            Resumo Profissional
          </Text>

          <Text style={styles.summary}>
            Desenvolvedor Full Stack e professor de tecnologia com
            experiência em desenvolvimento web, APIs REST,
            bancos de dados relacionais e treinamento de alunos
            nas áreas de programação, banco de dados e
            desenvolvimento de aplicações modernas.
          </Text>

          <Text style={styles.sectionTitle}>
            Experiência Profissional
          </Text>

          <View style={styles.jobContainer}>
            <Text style={styles.company}>
              SENAC Minas
            </Text>

            <Text style={styles.period}>
              2020 - Atual
            </Text>

            <Text style={styles.description}>
              Atuação como docente em cursos de tecnologia,
              ministrando conteúdos de desenvolvimento web,
              lógica de programação, bancos de dados, React,
              Node.js e metodologias ágeis.
            </Text>
          </View>

          <View style={styles.jobContainer}>
            <Text style={styles.company}>
              Desenvolvedor Freelancer
            </Text>

            <Text style={styles.period}>
              2018 - Atual
            </Text>

            <Text style={styles.description}>
              Desenvolvimento de sistemas web utilizando React,
              Next.js, Express, Prisma, PostgreSQL e integrações
              com APIs externas.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>
            Formação Acadêmica
          </Text>

          <Text style={styles.description}>
            Bacharelado em Sistemas de Informação
          </Text>

          <Text style={styles.description}>
            Pós-graduação em Tecnologias para Desenvolvimento Web
          </Text>

          <Text style={styles.sectionTitle}>
            Projetos de Destaque
          </Text>

          <Text style={styles.description}>
            • Sistema de Avaliação de Jurados
          </Text>

          <Text style={styles.description}>
            • Plataforma de Gestão Escolar
          </Text>

          <Text style={styles.description}>
            • Aplicações Full Stack com Next.js e Prisma
          </Text>

        </View>

      </Page>
    </Document>
  );
}
