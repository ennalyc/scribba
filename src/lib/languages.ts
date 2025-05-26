import ChinaActive from '@/assets/china-filled.png'
import ChinaInactive from '@/assets/china-empty.png'
import FranceActive from '@/assets/france-filled.png'
import FranceInactive from '@/assets/france-empty.png'
import SpainActive from '@/assets/spain-filled.png'
import SpainInactive from '@/assets/spain-empty.png'

export const languages = [
    { id: 111, language: "spanish", title: "Spanish", flagInactive: SpainInactive, flagActive: SpainActive},
    { id: 222, language: "french", title: "French", flag: "FR", flagInactive: FranceInactive, flagActive: FranceActive },
    { id: 333, language: "chinese", title: "Chinese", flag: "CN", flagInactive: ChinaInactive, flagActive: ChinaActive},
  ]