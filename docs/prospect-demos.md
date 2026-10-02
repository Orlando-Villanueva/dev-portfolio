# Démonstrations prospects

Une démo est un aperçu non officiel pour un prospect. Elle ne prend pas de réservation réelle. Chaque fichier dans `src/content/demos/` génère une page et sa page de confirmation. Les pages portent `noindex, nofollow` et sont exclues du sitemap. Aucun lien depuis les pages du portfolio ne mène aux démos; on partage leur URL directement avec le prospect. L'URL n'est pas protégée : quiconque la connaît peut ouvrir la page.

## Créer une démo française

1. Dupliquer le fichier de départ :

   ```sh
   cp src/content/demos/exemple.json src/content/demos/uniclassik.json
   ```

2. Dans `uniclassik.json`, remplacer les données d'exemple :

   - `slug` : URL publique, en minuscules ASCII, avec des tirets au besoin (`uniclassik`). Le slug doit être unique pour cette langue.
   - `locale` : `fr` pour la démo française.
   - `name`, `tagline`, `area` : nom, slogan et zone desservie, en français.
   - `phone` : numéro au format international, par exemple `+15145550100`. Ce même numéro alimente Appeler et WhatsApp; confirmer qu'il a un compte WhatsApp avant de partager le lien.
   - `colors.primary` et `colors.accent` : couleurs hexadécimales à six chiffres, avec `#` (ex. `#243B42`).
   - `services` : au moins un service. Chaque entrée a un `name` et un `price` comme chaînes de texte; inclure la devise dans le prix (ex. `45 $`).
   - `copy` : remplacer chaque texte du site. La liste complète des clés obligatoires suit ci-dessous. Elles doivent toutes rester présentes et non vides.

3. Construire puis vérifier la page sur téléphone. Pour `slug: "uniclassik"` et `locale: "fr"`, les URL générées sont `/demo/uniclassik/` et `/demo/uniclassik/merci/`.

   ```sh
   npm run build
   ```

4. Déployer par le flux habituel du site. Ajouter une démo ne demande aucune modification du gabarit ni des autres pages : le fichier de contenu et le déploiement suffisent.

### Textes obligatoires dans `copy`

| Clés | Texte à fournir |
| --- | --- |
| `pageSuffix`, `metaDescription` | Suffixe du titre de page et description pour les métadonnées. |
| `banner` | Avis visible indiquant que la page est une démo non officielle et qu'aucune réservation réelle n'est prise. |
| `headerCall`, `heroEyebrow`, `callAction`, `whatsappAction` | Appel à l'action dans l'en-tête et le hero; l'aire desservie s'affiche après `heroEyebrow`. |
| `servicesEyebrow`, `servicesTitle` | Petit titre et titre de la section des services. |
| `requestEyebrow`, `requestTitle`, `requestIntro` | Petit titre, titre et explication de la demande de rendez-vous. |
| `nameLabel`, `phoneLabel`, `serviceLabel`, `servicePlaceholder`, `dateLabel` | Libellés du formulaire et texte par défaut de la liste des services. |
| `messageLabel`, `messagePlaceholder`, `honeypotLabel`, `submitLabel`, `formNote` | Libellé, aide et champ anti-spam du formulaire, bouton d'envoi et note sous le formulaire. Préciser dans `formNote` qu'il s'agit d'une démo et que personne ne contactera le visiteur. |
| `formSubject` | Préfixe du sujet de la notification Netlify; le nom d'entreprise et le slug sont ajoutés automatiquement. |
| `footerDemo`, `footerCredit`, `creatorName` | Mention de démo dans le pied de page et attribution. |
| `confirmationEyebrow`, `confirmationTitle`, `confirmationFirstParagraph`, `confirmationSecondParagraph`, `confirmationReturnAction` | Tous les textes de la page de confirmation, y compris le bouton de retour. |

L'exemple [exemple.json](../src/content/demos/exemple.json) est complet et constitue le modèle de structure. Il représente une entreprise fictive; son numéro se trouve dans la plage réservée 555-0100 et ne joint pas de commerce réel.

## Ajouter une version anglaise

Créer un deuxième fichier pour le même prospect, par exemple `src/content/demos/uniclassik-en.json`. Conserver `slug: "uniclassik"`, définir `locale: "en"`, puis traduire tous les textes sous `copy` et les données métier qui doivent être en anglais. La version française reste à `/demo/uniclassik/`; la version anglaise est générée à `/demo/en/uniclassik/`, avec sa confirmation à `/demo/en/uniclassik/merci/`. Aucun changement au gabarit n'est requis.

## Formulaire et notifications

Le formulaire utilise Netlify Forms, le même canal que le formulaire principal, sous le nom `demo-request`. Les champs `demo_slug` et `demo_name` permettent d'identifier la démo dans la soumission. La page de confirmation confirme que la demande de test a été reçue, mais qu'aucune réservation n'est créée ni qu'un suivi aura lieu. Aucun courriel automatique n'est envoyé au visiteur.

Après le premier déploiement de ce formulaire, vérifier dans Netlify que la détection des formulaires est activée et qu'une notification **Form submission** envoie `demo-request` à la même adresse que le formulaire principal. Une notification configurée pour tous les formulaires peut déjà la couvrir; vérifier qu'elle l'inclut. Envoyer une demande de test avec des coordonnées fictives, puis confirmer sa présence dans Netlify et la réception du courriel avant de partager la démo. La notification arrive à Orlando; le commerçant présenté ne la reçoit pas directement.

## Démos déneigement — lot 3

Les pages `/demo/ottinger/`, `/demo/sbc/` et `/demo/grp/` réutilisent `SnowDemo.astro` et les assets hiver locaux. Leur configuration se trouve dans `src/data/snowDemos.ts`, séparément du gabarit; chacune possède aussi une confirmation à `/merci/`.

Le champ optionnel `colors` pilote le thème complet via les variables CSS du gabarit : `primary`, `accent`, `onAccent` pour les liens, surtitres et boutons; `overlay` pour la teinte sombre du hero; `surface`, `softSurface`, `text`, `muted` pour les fonds et textes; `cta`, `onCta`, `ctaKicker` pour le bandeau de soumission. Le pied de page reprend les couleurs de texte et de liens du thème. Les couleurs doivent être des hexadécimales lisibles ensemble. Sans `colors`, le thème bleu existant reste inchangé. Les trois prospects du lot 3 utilisent désormais ce thème bleu par défaut, sans couleurs personnalisées. La photo, le logo générique et la structure hiver restent identiques.

Si aucune ville n’est connue, omettre `city`, laisser `locationPhrase` vide et `sectors` vide. Le gabarit utilise alors des textes neutres et invite à confirmer les secteurs par téléphone. GRP n’affiche aucune ville.

Ces pages restent non indexées, exclues du sitemap et sans lien depuis le portfolio. Leur formulaire ne transmet ni n’enregistre les coordonnées. Le lot 3 ne doit pas être déployé en production avant approbation explicite.
