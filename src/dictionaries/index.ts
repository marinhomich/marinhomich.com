import "server-only";

const dictionaries = {
    en: () => import("@/dictionaries/en.json").then((module) => module.default),
    es: () => import("@/dictionaries/es.json").then((module) => module.default)
}

export const getDictionaries = async (locale) => dictionaries[locale]()