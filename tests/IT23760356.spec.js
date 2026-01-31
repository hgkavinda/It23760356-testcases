const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
   positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'simple sentence with daily action',
      input: 'mama budhun vadhinavaa',
      expected: 'මම බුදුන් වදිනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
     {
      tcId: 'Pos_Fun_0002',
      name: 'Compound sentence with reasoning & polite request',
      input: 'mama heta gedhara yanavaa, e nisaa mata heta lectures enna venne naee. oyaata puluvandha mata notes tika whatsapp karanna.',
      expected: 'මම හෙට ගෙදර යනවා, එ නිසා මට හෙට lectures එන්න වෙන්නෙ නෑ. ඔයාට පුලුවන්ද මට notes ටික whatsapp කරන්න.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0003',
      name: 'Interrogative question with daily usage',
      input: 'Ammaata beheth tika aran dhunnadha?',
      expected: 'අම්මාට බෙහෙත් ටික අරන් දුන්නද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'informal greeting & slang',
      input: 'haayi machan godaak kaalekin dhaekkee',
      expected: 'හායි මචන් ගොඩාක් කාලෙකින් දැක්කේ',
      category: 'Usability flow',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
     {
      tcId: 'Pos_Fun_0005',
      name: 'Mixed English + negation with imperative',
      input: 'mata magee campus ID ek genna amathakavela ee hindhaa mama enakan inna epaa oyaa yanna.',
      expected: 'මට මගේ campus ID එක් ගෙන්න අමතකවෙල ඒ හින්දා මම එනකන් ඉන්න එපා ඔයා යන්න.',
      category: 'Mixed Singlish + English',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Currency and plural form with question',
      input: 'mee sapaththu dheka mama gaththe Rs.10000 kata. puLuvannan kiyanna balanna kohendha kiyalaa.',
      expected: 'මේ සපත්තු දෙක මම ගත්තෙ Rs.10000 කට. පුළුවන්නන් කියන්න බලන්න කොහෙන්ද කියලා.',
      category: 'Punctuation / numbers',
      grammar: 'Past tense',
      length: 'M'
    },
     {
      tcId: 'Pos_Fun_0007',
      name: 'Past tense sentence with emphasis',
      input: 'apee thaththaa thamayi mea mal gas hadhuvee.',
      expected: 'අපේ තත්තා තමයි මේ මල් ගස් හදුවේ.',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
     
     {
      tcId: 'Pos_Fun_0008',
      name: 'Quantity and unit with polite request',
      input: 'mata haal 2kg k dhenna puluvandha?',
      expected: 'මට හාල් 2kg ක් දෙන්න පුලුවන්ද?',
      category: 'Punctuation / numbers',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Date format with simple sentence',
      input: '2002/12/19 mata hari visheeSha dhavasak.',
      expected: '2002/12/19 මට හරි විශේෂ දවසක්.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
   {
      tcId: 'Pos_Fun_0010',
      name: 'Multiple spaces preservation in sentence',
      input: 'mata heta kohehari yanna onee',
      expected: 'මට හෙට කොහෙහරි යන්න ඔනේ',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Mixed English + negation with imperative',
      input: 'mata hithena vidhihata they must work hard , mokadha eyaalage marks godak aduyi',
      expected: 'මට හිතෙන විදිහට they must work hard , මොකද එයාලගෙ marks ගොඩක් අඩුයි',
      category: 'Mixed Singlish + English',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
     {
      tcId: 'Pos_Fun_0012',
      name: 'Line break preservation in interrogative input',
      input: 'oyaata dhaen kohomadha\nhodhin innavadha ?',
      expected: 'ඔයාට දැන් කොහොමද\nහොදින් ඉන්නවද ?',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
     {
      tcId: 'Pos_Fun_0013',
      name: 'Colloquial slang with punctuation emphasis',
      input: 'Siraavatama, eeka supiri  vaedak machan!!',
      expected: 'සිරාවටම, ඒක සුපිරි  වැඩක් මචන්!!',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
   {
      tcId: 'Pos_Fun_0014',
      name: 'Typographical errors in common daily sentence',
      input: 'mama gedhara yanavaa, oyaata puluvandha mata podi udhavvak karanna',
      expected: 'මම ගෙදර යනවා, ඔයාට පුලුවන්ද මට පොඩි උදව්වක් කරන්න',
      category: 'Typographical error handling',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
     {
      tcId: 'Pos_Fun_0015',
      name: 'Convert multi-line input with line breaks',
      input: 'oyaata dhaen kohomadha\nhodhin innavadha?',
      expected: 'ඔයාට දැන් කොහොමද\nහොදින් ඉන්නවද?',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0016',
      name: 'Time format with mixed English sentence',
      input: 'heta udhee 8.30 am mata interview ekak thiyenvaa, eekata mama yanna oonee velaavatama.',
      expected: 'හෙට උදේ 8.30 am මට interview එකක් තියෙන්වා, ඒකට මම යන්න ඕනේ වෙලාවටම.',
      category: 'Punctuation / numbers',
      grammar: 'Future tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Typographical errors in common daily sentence',
      input: 'Heta vedhdhi okkoma vaahana tika vikiNilaa thiyenna oonee, naeththan loku prashnayak venavaa.',
      expected: 'හෙට වෙද්දි ඔක්කොම වාහන ටික විකිණිලා තියෙන්න ඕනේ, නැත්තන් ලොකු ප්‍රශ්නයක් වෙනවා.',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Polite request for objects',
      input: 'karuNaakaralaa magee poth tika dhenna.',
      expected: 'කරුණාකරලා මගේ පොත් ටික දෙන්න.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Interrogative sentence with mixed English',
      input: 'iilagata train eka thiyennee kiiyatadha?',
      expected: 'ඊලගට train එක තියෙන්නේ කීයටද?',
      category: 'Mixed Singlish + English',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Formal greeting / congratulatory phrase',
      input: 'oyaage jayagrahaNayata magen uNusum suba paethum.',
      expected: 'ඔයාගෙ ජයග්‍රහණයට මගෙන් උණුසුම් සුබ පැතුම්.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Conditional complex sentence with mixed English',
      input: 'heta bus eka naethi unath api velavatama yanna epaeyi hospital ekata.',
      expected: 'හෙට bus එක නැති උනත් අපි වෙලවටම යන්න එපැයි hospital එකට.',
      category: 'Mixed Singlish + English',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Immediate command with short input',
      input: 'vahaama mee tika paeththakin thiyanna',
      expected: 'වහාම මේ ටික පැත්තකින් තියන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Festive greeting with emphasis',
      input: 'suBha aluth avurudhdhak veevaa!!',
      expected: 'සුභ අලුත් අවුරුද්දක් වේවා!!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Informal response with agreement',
      input: 'hari, mama eeka balannan.',
      expected: 'හරි, මම ඒක බලන්නන්.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],

   negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Informal response with agreement',
      input: 'mamakaeemakanavaa',
      expected: 'මම කෑම කනවා',
      category: 'Word combination',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Typo in simple sentence',
      input: 'mata bath ooneee',
      expected: 'මට බත් ඕනේ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Slang/colloquial input',
      input: 'ela machan super!!',
      expected: 'එල මචන් සුපිරි!!',
      category: 'Slang',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Excessive punctuation',
      input: 'mama ??? Bonavaa',
      expected: 'මම ??? බොනවා',
      category: 'Punctuation',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Heavy spelling errors',
      input: 'mtaa heta gdhra ynna onee',
      expected: 'මට හෙට ගෙදර යන්න ඕනේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Mixed symbols and text',
      input: 'mama @@@@ heta paadam karanna yaaluvekgee gedhara yanavaa',
      expected: 'මම හෙට පාඩම් කරන්න යාලුවෙක්ගේ ගෙදර යනවා',
      category: 'Punctuation',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed casing causes incorrect conversion',
      input: 'APi heta vinooDHA  Chaarikavak  yaNavaa',
      expected: 'අපි හෙට විනෝද චාරිකාවක් යනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Excessive word splittingt',
      input: 'ma ma he ta office eka ta yana vaa.',
      expected: 'මම හෙට office එකට යනවා.',
      category: 'Formatting (spaces)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Spoken shorthand handling',
      input: 'mama inne na bn',
      expected: 'මම ඉන්නේ නෑ බන්',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],

  ui: {
    tcId: 'Neg_UI_0001',
    name: 'Output does not refresh when input is edited repeatedly',
    input: 'man movie ekak balanna yanavaa',
    expectedFull: 'Sinhala output should update immediately with each change in the input, showing the current sentence accurately',
    category: 'Empty/cleared input handling',
    grammar: 'Simple sentence',
    length: 'S'
  }


};
// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});