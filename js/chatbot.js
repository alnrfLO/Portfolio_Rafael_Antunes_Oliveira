function levenshteinDistance(s1, s2) {
    if (s1 === s2) return 0;
    if (s1.length === 0) return s2.length;
    if (s2.length === 0) return s1.length;

    const matrix = [];

    // Initialisation de la première ligne et colonne
    for (let i = 0; i <= s2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= s1.length; j++) {
        matrix[0][j] = j;
    }

    // Calcul de la matrice
    for (let i = 1; i <= s2.length; i++) {
        for (let j = 1; j <= s1.length; j++) {
            const cost = (s1[j - 1] === s2[i - 1]) ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,      // suppression
                matrix[i][j - 1] + 1,      // insertion
                matrix[i - 1][j - 1] + cost // substitution
            );
        }
    }

    return matrix[s2.length][s1.length];
}
const RESPONSES = {
    // 👋 Salutations
    'salut': "Bonjour ! Tu vas bien ?",
    'hello': "Salut ! Comment vas-tu ?",
    'bonsoir': "Bonsoir ! Ravi de te parler.",
    'hey': "Hey ! Que puis-je faire pour toi ?",

    // 💬 Réponses "ça va"
    'ça va': "Oui super, merci ! Et toi ?",
    'ca va': "Oui super, merci ! Et toi ?",
    'cava': "Oui super, merci ! Et toi ?",
    'sava': "Oui super, merci ! Et toi ?",
    'sa va': "Oui super, merci ! Et toi ?",
    'oui et toi': "Moi aussi, je vais bien merci 😊",
    'et toi': "Ça va très bien, merci !",

    // Façons de dire "tu vas bien"
    'tu va bien': "Oui et toi ?",
    'tuvabien': "Oui ça va, merci ! Et toi ?",
    'tu vas bien': "Oui très bien, merci ! Et toi ?",
    'tuvasbien': "Oui très bien, merci ! Et toi ?",
    'tu va b1': "Haha oui ça roule 😄 Et toi ?",

    // 👨‍💻 Présentation
    'qui es-tu': "Je suis Rafael Antunes Oliveira, étudiant en BUT MMI.",
    'tu es qui': "Je suis Rafael Antunes Oliveira, développeur en formation.",
    'tu est qui': "Je suis Rafael Antunes Oliveira, développeur en formation.",
    'présente-toi': "Je m'appelle Rafael Antunes Oliveira, passionné par le numérique.",
    'comment tu t’appelles': "Je m'appelle Rafael Antunes Oliveira.",

    // 🎓 Études
    'tu fais quoi': "Je suis en BUT MMI (Métiers du Multimédia et de l'Internet).",
    'tu étudies où': "Je suis en BUT MMI, un cursus axé sur le numérique.",
    'c’est quoi mmi': "MMI signifie Métiers du Multimédia et de l'Internet.",
    'tes études': "Je fais des études en MMI.",
    'but mmi': "C’est une formation qui combine design, web, vidéo et com.",

    // 📍 Origine / ville
    'tu viens d\'où': "Je viens de Leiria, au Portugal 🇵🇹.",
    'tu vien d ou': "Je viens de Leiria, au Portugal 🇵🇹.",
    'origine': "Je suis originaire de Leiria, au Portugal.",
    'tu es de quelle ville': "Je viens de Leiria, au Portugal.",
    'ta ville': "Ma ville d’origine est Leiria.",
    'leiria': "C’est une ville portugaise d’où je viens.",
    't’habites où': "Je viens de Leiria, au Portugal.",

    // 🕹️ Projets
    'projets': "J’ai développé des jeux comme Pong, Snake, Tetris et Tic Tac Toe.",
    't’as fait quoi': "J’ai réalisé plusieurs jeux comme Snake et Tetris.",
    'tetris': "Oui, j’ai recréé Tetris en projet personnel.",
    'tu fais des jeux': "Oui, j’ai codé des jeux comme Pong ou Snake.",
    'tu développes quoi': "Je code des jeux, des sites web, et des expériences numériques.",
    'jeux': "J’ai codé Snake, Tetris, Pong, et Tic Tac Toe 😄",

    // 💡 Divers
    'tu parles quelles langues': "Je parle portugais 🇵🇹, français 🇫🇷 et un peu anglais 🇬🇧.",
    'quel âge as-tu': "Je suis jeune, toujours en apprentissage 😄.",
    'tes passions': "J’adore le code, le graphisme, les jeux vidéo et la musique.",
    'tu fais quoi de ton temps libre': "Je code, je joue un peu, j’écoute de la musique, je crée !"
};

const DEFAULT_RESPONSE = "Désolé, je ne comprends pas encore cette question.";
const MIN_DISTANCE = 3;

/**
 * Traite le message de l'utilisateur et trouve la meilleure réponse.
 * @param {string} userMessage - Le message entré par l'utilisateur.
 * @returns {string} La réponse du chatbot.
 */
function getChatbotResponse(userMessage) {
    if (!userMessage) {
        return "Message vide, veuillez réessayer.";
    }

    // Nettoyage et normalisation du message (minuscules, retrait des espaces inutiles)
    const cleanedMessage = userMessage.trim().toLowerCase();

    let response = DEFAULT_RESPONSE;
    let foundMatch = false;

    // 1. Recherche de correspondance exacte ou inclusion
    for (const key in RESPONSES) {
        // strpos($message, $key) !== false en PHP se traduit par cleanedMessage.includes(key)
        if (cleanedMessage.includes(key)) {
            response = RESPONSES[key];
            foundMatch = true;
            break;
        }
    }
    
    // 2. Recherche par distance de Levenshtein (uniquement si aucune correspondance n'a été trouvée)
    if (!foundMatch) {
         for (const key in RESPONSES) {
             const distance = levenshteinDistance(cleanedMessage, key);
             // Levishtein doit être appliqué sur le message complet vs la clé
             if (distance <= MIN_DISTANCE) {
                 response = RESPONSES[key];
                 foundMatch = true;
                 break;
             }
         }
    }
    
    return response;
}
async function handleChatbotQuery(message) {
    // Simuler le traitement asynchrone du serveur (attente de 300ms)
    await new Promise(resolve => setTimeout(resolve, 300)); 
    
    // Obtenir la réponse
    const responseText = getChatbotResponse(message);
    
    // Simuler la structure de réponse JSON { response: "..." }
    return { response: responseText };
}
