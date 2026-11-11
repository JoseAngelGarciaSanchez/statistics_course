// Crée l'enquête de satisfaction du cours de statistiques (Google Forms).
// Usage : script.google.com > Nouveau projet > coller ce fichier > Exécuter « creerEnquete ».
// Les liens (édition et réponse) s'affichent dans le journal d'exécution.
function creerEnquete() {
  const NOTES = ['1 - Mauvais', '2', '3', '4', '5 - Excellent'];
  const NIVEAUX = ['Débutant', 'Intermédiaire', 'Avancé'];
  const LABS = [
    '1 - Régression linéaire',
    '2 - Modèle linéaire',
    "3 - Tests d'hypothèses",
    '4 - Hétéroscédasticité et autocorrélation',
    '5 - Endogénéité et variables instrumentales',
    '6 - Choix binaires (LPM, logit, probit) et sélection de Heckman',
    '7 - Ridge et lasso',
  ];

  const form = FormApp.create('Enquête de satisfaction - Cours de statistiques')
    .setDescription('Questionnaire anonyme (environ 5 minutes). Vos réponses servent uniquement à améliorer le cours.');

  // Page 1 : général
  form.addScaleItem().setTitle('Globalement, êtes-vous satisfait(e) du cours ?')
    .setBounds(1, 5).setLabels('Pas du tout', 'Très satisfait(e)').setRequired(true);
  form.addScaleItem().setTitle('Recommanderiez-vous ce cours à un(e) camarade ?')
    .setBounds(0, 10).setLabels('Pas du tout', 'Absolument').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Votre niveau en statistiques avant le cours').setChoiceValues(NIVEAUX);
  form.addMultipleChoiceItem().setTitle('Votre niveau en Python avant le cours').setChoiceValues(NIVEAUX);

  // Page 2 : contenu
  form.addPageBreakItem().setTitle('Contenu du cours');
  form.addGridItem().setTitle('Évaluez chaque élément du cours')
    .setRows(['Slides', 'Exemples en cours', 'Labs (notebooks Jupyter)', 'Corrections des labs', 'Projet final'])
    .setColumns(NOTES.concat('Non utilisé'));
  form.addMultipleChoiceItem().setTitle('Le niveau de difficulté était')
    .setChoiceValues(['Trop facile', 'Adapté', 'Trop difficile']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Le rythme du cours était')
    .setChoiceValues(['Trop lent', 'Adapté', 'Trop rapide']).setRequired(true);
  form.addCheckboxItem().setTitle('Quels labs avez-vous préférés ?').setChoiceValues(LABS);
  form.addCheckboxItem().setTitle('Quels labs vous ont posé le plus de difficultés ?').setChoiceValues(LABS);
  form.addMultipleChoiceItem().setTitle("L'installation de l'environnement (uv sync, Jupyter) s'est passée")
    .setChoiceValues(['Sans problème', 'Avec quelques difficultés', "J'ai été bloqué(e)"]);

  // Page 3 : enseignement
  form.addPageBreakItem().setTitle('Enseignement');
  form.addGridItem().setTitle("Évaluez l'enseignement")
    .setRows(['Clarté des explications', 'Réponses aux questions', 'Disponibilité en dehors des cours'])
    .setColumns(NOTES);

  // Page 4 : commentaires
  form.addPageBreakItem().setTitle('Vos commentaires');
  form.addParagraphTextItem().setTitle("Qu'avez-vous le plus apprécié ?");
  form.addParagraphTextItem().setTitle('Que faudrait-il améliorer ?');
  form.addParagraphTextItem().setTitle('Quels sujets aimeriez-vous voir ajoutés ?');

  // Les formulaires créés par script peuvent naître « non publiés » : on publie si l'option existe.
  if (form.supportsAdvancedResponderPermissions && form.supportsAdvancedResponderPermissions()) {
    form.setPublished(true);
  }

  Logger.log('Modifier : ' + form.getEditUrl());
  Logger.log('Lien à envoyer aux étudiants : ' + form.getPublishedUrl());
}
