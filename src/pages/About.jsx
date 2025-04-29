import { useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [activeLanguage, setActiveLanguage] = useState('english');

  const content = {
    english: {
      title: "About Bhagavad Gita",
      text: [
        "The Bhagavad Gita (/ˈbʌɡəvəd ˈɡiːtɑː/; Sanskrit: भगवद्गीता, IPA: [ˌbʱɐɡɐʋɐd ˈɡiːtɑː], romanized: bhagavad-gītā, lit. 'God's song'), often referred to as the Gita (IAST: gītā), is a Hindu scripture, dated to the second or first century BCE, which forms part of the epic poem Mahabharata.",
        "The Gita is a synthesis of various strands of Indian religious thought, including the Vedic concept of dharma (duty, rightful action); samkhya-based yoga and jnana (knowledge); and bhakti (devotion). Among the Hindu traditions, the text holds a unique pan-Hindu influence as the most prominent sacred text and is a central text in Vedanta and the Vaishnava Hindu tradition.",
        "While traditionally attributed to the sage Veda Vyasa, the Gita is historiographically regarded as a composite work by multiple authors. Incorporating teachings from the Upanishads and the samkhya yoga philosophy, the Gita is set in a narrative framework of dialogue between the pandava prince Arjuna and his charioteer guide Krishna, an avatar of Vishnu, at the onset of the Kurukshetra War.",
        "Though the Gita praises the benefits of yoga in releasing man's inner essence from the bounds of desire and the wheel of rebirth, the text propagates the Brahmanic idea of living according to one's duty or dharma, in contrast to the ascetic ideal of seeking liberation by avoiding all karma. Facing the perils of war, Arjuna hesitates to perform his duty (dharma) as a warrior. Krishna persuades him to commence in battle, arguing that while following one's dharma, one should not consider oneself to be the agent of action, but attribute all of one's actions to God (bhakti).",
        "The Gita posits the existence of an individual self (jivatman) and the higher Godself (Krishna, Atman/Brahman) in every being; the Krishna–Arjuna dialogue has been interpreted as a metaphor for an everlasting dialogue between the two. Numerous classical and modern thinkers have written commentaries on the Gita with differing views on its essence and the relation between the individual self (jivatman) and God (Krishna) or the supreme self (Atman/Brahman). In the Gita's Chapter XIII, verses 24–25, four pathways to self-realization are described, which later became known as the four yogas: meditation (raja yoga), insight and intuition (jnana yoga), righteous action (karma yoga), and loving devotion (bhakti yoga). This influential classification gained widespread recognition through Swami Vivekananda's teachings in the 1890s. The setting of the text in a battlefield has been interpreted by several modern Indian writers as an allegory for the struggles and vagaries of human life."
      ]
    },
    hindi: {
      title: "श्रीमद्भगवद्गीता के बारे में",
      text: [
        "महाभारत युद्धारम्भ होने के ठीक पहले भगवान श्रीकृष्ण ने अर्जुन को जो उपदेश दिया वह श्रीमद्भगवद्गीता के नाम से प्रसिद्ध है। यह महाभारत के भीष्मपर्व का अङ्ग है। गीता में 18 अध्याय और 700 श्लोक हैं। गीता की गणना प्रस्थानत्रयी में की जाती है, जिसमें उपनिषद् और ब्रह्मसूत्र भी सम्मिलित हैं।",
        "अतएव भारतीय परम्परा के अनुसार गीता का स्थान वही है जो उपनिषद और धर्मसूत्रों का है। उपनिषदों को गौ (गाय) और गीता को उसका दुग्ध कहा गया है। इसका तात्पर्य यह है कि उपनिषदों की जो अध्यात्म विद्या थी, उसको गीता सर्वांश में स्वीकार करती है। उपनिषदों की अनेक विद्याएँ गीता में हैं। जैसे, संसार के स्वरूप के सम्बन्ध में अश्वत्थ विद्या, अनादि अजन्मा ब्रह्म के विषय में अव्ययपुरुष विद्या, परा प्रकृति या जीव के विषय में अक्षरपुरुष विद्या और अपरा प्रकृति या भौतिक जगत के विषय में क्षरपुरुष विद्या। इस प्रकार वेदों के ब्रह्मवाद और उपनिषदों के अध्यात्म, इन दोनों की विशिष्ट सामग्री गीता में संनिविष्ट है। उसे ही पुष्पिका के शब्दों में ब्रह्मविद्या कहा गया है।",
        "महाभारत के युद्ध के समय जब अर्जुन युद्ध करने से मना करते हैं तब श्री कृष्ण उन्हें उपदेश देते है और कर्म व धर्म के सच्चे ज्ञान से अवगत कराते हैं। श्री कृष्ण के इन्हीं उपदेशों को श्रीमद्भगवद्गीता नामक ग्रन्थ में सङ्कलित किया गया है।"
      ]
    },
    marathi: {
      title: "भगवद्‌गीता विषयी",
      text: [
        "भगवद्‌गीता हा प्राचीन भारतीय तत्त्वज्ञानविषयक ग्रंथ आहे. वेदांच्या अखेरच्या रचनेतील एक ग्रंथ. 'गीतोपनिषद' म्हणूनही प्रसिद्ध. त्यात भगवान श्रीकृष्णांनी अर्जुनाला जीवनाबद्दल केलेला उपदेश आहे.",
        "५००० वर्षांपूर्वी २५ डिसेंबर ह्या दिवशी श्रीकृष्णाने अर्जुनाला गीता सांगितली. यात एकूण १८ अध्याय व ७०० श्लोक आहेत. भारतीय या ग्रंथाला पवित्र धर्मग्रंथ समजतात. त्यामुळे न्यायालयात गीतेवर हात ठेवून शपथ घेण्याची प्रथा पडली आहे. गीताई हे आचार्य विनोबा भावे यांनी केलेले गीतेचे मराठीत केलेले ओवीबद्ध भाषांतर आहे.",
        "भगवद्गीता हा हिंदुस्थानातला अतिशय महत्त्वाचा व मानवी इतिहासातल्या ग्रंथांपैकी अतिशय तत्त्वज्ञानावर आधारलेला महत्त्वाचा संदर्भग्रंथ आहे. हा ग्रंथ संस्कृत भाषेत काव्यस्वरूपात लिहिलेला आहे. 'महाभारत' या महाकाव्याचा एक भाग असलेला हा ग्रंथ १८ अध्यायांचा (७०० श्लोक) आहे. महाभारतातल्या महायुद्धाच्या वेळेस भगवान श्रीकृष्णांनी गीता अर्जुनास मार्गदर्शन स्वरूपात सांगितली, असे महाभारताच्या कथेत म्हणले आहे.",
        "हिंदू (वैदिक) धर्माच्या मते भगवान श्रीकृष्ण हे भगवान विष्णूंचे स्वरूप मानले जातात. हा ग्रंथ मानवाला परमोच्च ज्ञान देतो आणि जीवन कसे जगावे यांचे मार्गदर्शन करतो असे मानले जाते. सामान्यजनांमध्ये भगवत्-गीता, 'गीता' या नावाने ओळखली जाते.",
        "कुरुक्षेत्रावर रणांगणामध्ये युद्धाच्या सुरुवातीला सांगितली गेलेली गीता हा श्रीकृष्ण आणि अर्जुन यांच्यातला संवाद असून त्यामध्ये श्रीकृष्णाने अर्जुनाच्या शंकांचे निरसन केले आहे. विविध उदाहरणे आणि उपमांचा आधार घेत श्रीकृष्णाने अर्जुनाला योग आणि वेदान्त यांबद्दल मार्गदर्शन केले आहे."
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF3E0] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveLanguage('english')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeLanguage === 'english' ? 'bg-[#FF9933] text-white' : 'bg-white text-[#800000] hover:bg-[#FF9933]/20'}`}
            >
              English
            </button>
            <button
              onClick={() => setActiveLanguage('hindi')}
              className={`px-4 py-2 text-sm font-medium ${activeLanguage === 'hindi' ? 'bg-[#FF9933] text-white' : 'bg-white text-[#800000] hover:bg-[#FF9933]/20'}`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setActiveLanguage('marathi')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeLanguage === 'marathi' ? 'bg-[#FF9933] text-white' : 'bg-white text-[#800000] hover:bg-[#FF9933]/20'}`}
            >
              मराठी
            </button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#FFD700]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF9933] to-[#800000] p-6">
            <h1 className="text-3xl font-bold text-white text-center">
              {content[activeLanguage].title}
            </h1>
          </div>

          {/* Text Content */}
          <div className="p-6 md:p-8">
            {content[activeLanguage].text.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-[#333333] mb-4 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Image Section */}
          <div className="p-6 bg-[#FFF8E1] border-t border-[#FFD700]/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <img
                  src="/bhagavad-gita-pic.webp"
                  alt="Bhagavad Gita"
                  className="w-full h-auto rounded-lg shadow-md border-2 border-[#FFD700]"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-[#800000] mb-3">
                  {activeLanguage === 'english' && 'Key Facts'}
                  {activeLanguage === 'hindi' && 'मुख्य तथ्य'}
                  {activeLanguage === 'marathi' && 'मुख्य माहिती'}
                </h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-[#FF9933] mr-2">•</span>
                    {activeLanguage === 'english' && '18 chapters, 700 verses'}
                    {activeLanguage === 'hindi' && '18 अध्याय, 700 श्लोक'}
                    {activeLanguage === 'marathi' && '18 अध्याय, 700 श्लोक'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF9933] mr-2">•</span>
                    {activeLanguage === 'english' && 'Part of the Mahabharata (Bhishma Parva)'}
                    {activeLanguage === 'hindi' && 'महाभारत का भाग (भीष्म पर्व)'}
                    {activeLanguage === 'marathi' && 'महाभारताचा भाग (भीष्म पर्व)'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF9933] mr-2">•</span>
                    {activeLanguage === 'english' && 'Dialogue between Krishna and Arjuna'}
                    {activeLanguage === 'hindi' && 'कृष्ण और अर्जुन के बीच संवाद'}
                    {activeLanguage === 'marathi' && 'कृष्ण आणि अर्जुन यांच्यातील संवाद'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF9933] mr-2">•</span>
                    {activeLanguage === 'english' && 'Teaches four paths of yoga'}
                    {activeLanguage === 'hindi' && 'योग के चार मार्ग सिखाता है'}
                    {activeLanguage === 'marathi' && 'चार योग मार्ग शिकवते'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}