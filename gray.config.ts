import {ContentHandler} from "@/lib/content-plugins";
import {defaultVideoFileHandlerOptions} from "@/lib/content-plugins/video-files";
import {videoComparator, videoEnhancer} from "@/lib/ai-thinkerers/content";
import {GrayConfig} from "@/types/gray.types";

const configs: GrayConfig ={
    icon: "/img.png",
    title: "Samhatit Consulting | Expert Salesforce & Transformation IA",
    querySuggestions: [
        "Quels sont les bénéfices d'Agentforce ?",
        "Comment démarrer avec Salesforce ?",
        "Qu'est-ce que la transformation IA ?",
        "Quelles sont vos expertises sectorielles ?",
        "Comment calculer mon ROI Agentforce ?"
    ],
    socials: [
        {
            "label": "LinkedIn",
            "link": "https://linkedin.com/company/samhatit-consulting",
            "provider": "linkedin"
        },
        {
            "label": "Email",
            "link": "mailto:contact@samhatit-consulting.cloud",
            "provider": "email"
        }
    ],
    contentPlugins: [
        new ContentHandler<any, any>({
            ...defaultVideoFileHandlerOptions,
            enhancer: videoEnhancer,
            comparator: videoComparator,
            summarizer: ({originalName, autoSummary}) => {
                return `${originalName} - ${autoSummary}`
            },
        })
    ]
}

export default configs;
