import React from "react";

import styled from "styled-components";

import { lighten } from "polished";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Badge from "../components/badge";
import Sources from "../components/sources";
import Separator from "../components/separator";

// styles
const pageStyles = {
  padding: "2vh 8vw",
  maxWidth: 720,
  margin: "auto",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 720,
};

const HeadingAccent = styled.em`
  font-style: normal;
  color: ${({ theme }) => theme.accent};
`;

const StyledQuestion = styled.h2`
  font-size: 21px;
  margin-bottom: 30px;
  font-weight: 700;
  color: ${({ color, theme }) => (theme.id !== 'dark' ? color : lighten(0.5, color))};
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 0;
  line-height: 1.5em;
`;

const StyledDescription = styled(StyledParagraph)`
  font-weight: 300;
`;

const StyledSection = styled.section`
  margin-bottom: 72px;
`;

// data
const questions = [
  {
    text: "Je m'inquiète pour la balance bénéfice risque",
    description:
      "Les vaccins COVID, bien qu'ayant des effets secondaires, présentent moins de risques d'effets sur la santé que le COVID, peu importe son âge ou le vaccin utilisé.",
    color: "#993B00",
    sources: [
      {
        text: "Page interactive de calcul balance bénéfice risques",
        url: "https://cress-umr1153.fr/covid_vaccines/",
        author: "Centre de recherche épidémiologie et statistiques",
      },
      {
        text: "[VIDÉO] Scénario sans vaccins VS avec vaccin : qui gagne ?",
        url: "https://www.youtube.com/watch?v=hOWB7o6XUSU",
        author: "Chat Sceptique",
      },
    ],
  },
  {
    text: "Le vaccin n'empêche pas d'attraper ou de transmettre le COVID",
    description:
      "C'est vrai, néanmoins il réduit énormément la charge virale, c'est-à-dire le nombre de copies du virus dans l'organisme. Cela réduit fortement les chances de contracter une forme symptomatique ou grave de la maladie, et quasiment à zéro les risques de transmissions à une autre personne vaccinée ou non.",
    color: "#305154",
    sources: [
      {
        text: "A quel point la vaccination freine-t-elle la transmission du COVID ?",
        url: "https://www.francetvinfo.fr/sante/maladie/coronavirus/vaccin/covid-19-a-quel-point-la-vaccination-freine-t-elle-la-transmission-du-virus_4690869.html",
        author: "France Info",
      },
    ],
  },
  {
    text: "Je ne suis pas sûr du contenu des vaccins",
    description:
      "Les compositions des vaccins COVID sont librement accessibles sur Internet. C'est leur procédé de fabrication qui reste un secret industriel.",
    color: "#A2026C",
    sources: [
      {
        text: "Composition des vaccins COVID (Pfizer, Moderna, Astrazeneca...)",
        url: "https://www.mesvaccins.net/web/vaccines?utf8=%E2%9C%93&name_or_disease=vaccine&search-by-name=covid&search-by-disease=&commit=Chercher&search-by-age=&age_unit=ans",
      },
    ],
  },
  {
    text: "Nous n'avons pas de recul sur les vaccins à ARN messager",
    description:
      "Nous n'avons effectivement pas de recul à long terme sur le procédé, mais c'est aussi le cas de quasiment tous les vaccins et médicaments au moment de leur mise sur le marché. Les effets secondaires à long terme sont évalués après la mise sur le marché d'un médicament ou d'un vaccin. Une surveillance longue est mise en place une fois le vaccin/médicament distribué à large échelle. Par ailleurs, la technologie des vaccins à ARN messager est en étude depuis près de 30 ans et nous avons une certaine connaissance de son fonctionnement, même si nous n'avons que quelques vaccins sur le marché, produits avec ce procédé depuis 2018, et d'autres en phase d'essai (vaccins antirabiques, antigrippaux et anticancéreux notamment).",
    color: "#0B5A8E",
    sources: [
      {
        text: "Page Wikipédia des vaccins à ARNm",
        url: "https://fr.wikipedia.org/wiki/Vaccin_%C3%A0_ARN",
      },
    ],
  },
  {
    text: "Il n'y a pas eu d'essai clinique ou ils ont été raccourcis. Le vaccin est sorti très vite.",
    description:
      "Pour répondre à la crise du COVID-19, de nombreux labos, donateurs, et gouvernements ont débloqué énormément de ressources financières pour la recherche d'un vaccin. Des essais cliniques accélérés ont également été possibles grâce à un nombre de volontaires exceptionnellement haut par rapport à des essais cliniques habituelles. Le nombre de volontaires, la forte implication de toute la communauté scientifique et le déblocage de financements massifs ont permis la sortie rapide des vaccins.",
    color: "#4D5C00",
    sources: [
      {
        text: "Les raisons d'un vaccin en temps record",
        url: "https://www.quechoisir.org/actualite-covid-19-les-raisons-d-un-vaccin-en-temps-record-n86767/",
        author: "Que choisir",
      },
    ],
  },
];

const autresRessources = [
  {
    text: "Dix doutes légitimes sur la vaccination",
    url: "https://www.letemps.ch/sciences/dix-doutes-legitimes-vaccination-zero-bonne-raison-ne-y-aller",
    author: "Le Temps",
  },
  {
    text: "Est-ce que je vais me faire vacciner ?",
    url: "https://www.youtube.com/watch?v=GBzJ77y8Bho",
    author: "Cyrus North",
  },
  {
    text: "Covaxinfo",
      url: "https://covaxinfo.fr/",
      badge: true
  },
  {
    text: "FAQ Vaccin COVID19 - Du Côté de la Science",
      url: "https://ducotedelascience.org/faq-vaccin-covid19-vos-questions-et-nos-reponses/",
      badge: true
  },
  {
    text: "Adiós Corona",
      url: "https://www.adioscorona.org/themes-questions/vaccins.html",
      badge: true
  },
  {
    text: "Vaccination info service",
      url: "https://vaccination-info-service.fr/Les-maladies-et-leurs-vaccins/COVID-19",
      badge: true
  },
];

// markup
const IndexPage = () => {
  const title = "J'ai peur du vaccin COVID-19";

  return (
    <Layout style={pageStyles} pageTitle={title}>
      <SEO title={title} />

      <h1 style={headingStyles}>
        J'ai peur du vaccin COVID<br />
        <HeadingAccent>Il est normal et sain d'avoir des doutes</HeadingAccent>
      </h1>

      <StyledParagraph>
        Dans le climat de crise actuel, la multiplication des sources
        d'informations, souvent contradictoires, pas claires, ou parfois fausses
        n'améliore pas la situation. Cette page vise à regrouper les différentes
        ressources apportant des réponses scientifiques à des questions
        légitimes.
      </StyledParagraph>

      <StyledSection>
        {questions.map(question => (
          <React.Fragment key={question.text}>
            <Separator />

            <StyledQuestion color={question.color}>
              «&nbsp;{question.text}&nbsp;»
              {question.badge && <Badge />}
            </StyledQuestion>

            <StyledDescription>
              {question.description}
            </StyledDescription>

            <Sources
              color={question.color}
              content={question.sources}
              title={`Source${question.sources?.length > 1 ? 's' : ''}`}
            />
          </React.Fragment>
        ))}
      </StyledSection>

      <StyledSection>
        <h2>Autres ressources</h2>

        <StyledParagraph>
          Les liens suivants sont des ressources, pages web, articles, vidéos
          qui regroupent des réponses à plusieurs des questions cités
          précédemment, ou qui partagent leur vision plus généraliste sur la
          vaccination.
        </StyledParagraph>

        <Sources content={autresRessources} />
      </StyledSection>

      <StyledSection>
        <h2>Où se faire vacciner en France ?</h2>

        <StyledParagraph>
          Vous pouvez trouver un lieu de vaccination grâce au service{" "}
          <a href="https://vitemadose.covidtracker.fr/" target="_blank" rel="noopener">
            Vite Ma Dose
          </a>{" "}
          qui permet de rechercher simultanément un RDV sur toutes les
          plateformes de réservation (Doctolib, Keldoc...).
          <br />
          <br />
          Pour plus d'informations sur les lieux et campagnes de vaccination,
          vous pouvez visiter cette page du site Ameli de l'Assurance Maladie :{" "}
          <a
            href="https://www.ameli.fr/assure/covid-19/vaccination-contre-la-covid-19/qui-peut-se-faire-vacciner-quand-et-comment"
            target="_blank"
            rel="noopener"
          >
            Qui peut se faire vacciner, quand et comment ?
          </a>
        </StyledParagraph>
      </StyledSection>

      <StyledSection>
        <h2>À propos</h2>

        <StyledParagraph>
          Ce site est apolitique : il n'a aucun lien avec un parti politique
          et/ou le gouvernement de quelque pays que ce soit.
        </StyledParagraph>

        <StyledParagraph>
          En cas d'erreur, de problème, ou si vous pensez qu'une ressource
          manque, n'hésitez pas à participer à ce site via le{" "}
          <a
            href="https://github.com/PofMagicfingers/j-ai-peur-du-vaccin"
            target="_blank"
            rel="noopener"
          >
            projet GitHub
          </a>{" "}
          ou en envoyant un mail à{" "}
          <a href="mailto:contact@jaipeurduvaccin.fr" target="_blank" rel="noopener">
            contact@jaipeurduvaccin.fr
          </a>
        </StyledParagraph>
      </StyledSection>
    </Layout>
  );
};

export default IndexPage;
