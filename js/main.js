const AR = {
  n_home:"الرئيسية",n_about:"نبذة",n_edu:"التعليم",n_skills:"المهارات",n_exp:"الخبرة",n_serv:"الخدمات",n_proj:"المشاريع",n_act:"الأنشطة",n_contact:"تواصل",
  hello:"مرحباً، أنا",name:"محمد أمجد سيد",role:"مطوّر Full Stack .NET",
  tag:"طالب علوم حاسب أبني تطبيقات ويب عملية باستخدام C# و .NET.",b_contact:"تواصل معي",b_proj:"شاهد مشاريعي",alt:"محمد أمجد سيد",
  l_about:"نبذة عني",h_about:"من أنا",
  a1:"أنا طالب علوم حاسب في الجامعة العربية المفتوحة، وأركّز على تطوير الويب Full Stack باستخدام منظومة .NET.",
  a2:"أعمل بلغة C# والبرمجة كائنية التوجه وSQL Server وASP.NET Core، وسبق أن استخدمت C++ وPython وJava وPHP وHTML وCSS وJavaScript.",
  a3:"أحب حل المشكلات والبرمجة التنافسية، وأستمتع ببناء تطبيقات عملية تحل مشكلات حقيقية.",
  a4:"أتعلم حالياً من خلال مبادرة رواد مصر الرقمية (DEPI) في مسار Full Stack .NET.",
  s1:"التخرج المتوقع",s2:"التركيز الحالي",s3:"مسار Full Stack .NET",s4:"البرمجة التنافسية",
  l_edu:"التعليم",h_edu:"الخلفية الأكاديمية",
  e1d:"التخرج المتوقع: 2027",e1t:"بكالوريوس علوم الحاسب",e1p:"طالب علوم حاسب أركّز على تطوير البرمجيات وقواعد البيانات وحل المشكلات.",
  e2d:"جارٍ حالياً",e2t:"تطوير Full Stack .NET",e2s:"DEPI - مبادرة رواد مصر الرقمية",
  e2p:"أتعلم C# وASP.NET Core وSQL Server وEntity Framework Core وREST APIs وGit وتطوير الويب الحديث.",
  l_skills:"المهارات",h_skills:"المهارات التقنية",k1:"أركّز عليها حالياً",k2:"البرمجة والويب",k3:"قواعد البيانات والمفاهيم",k4:"الأدوات",
  l_exp:"الخبرة",h_exp:"التدريب والعمل العملي",
  x1d:"جارٍ حالياً",x1t:"متدرب في DEPI",x1s:"مسار Full Stack .NET",x1p:"تدريب على C# و.NET وتطوير الويب وقواعد البيانات وتطوير البرمجيات ومهارات العمل.",
  x2d:"عمل عملي",x2t:"موقع مطعم",x2s:"مشروع بأسلوب العمل الحر",x2p:"بنيت موقعاً متجاوباً يعرض قائمة المطعم وخدماته وبيانات التواصل.",
  l_serv:"الخدمات",h_serv:"ماذا يمكنني أن أقدّم",
  v1t:"مواقع متجاوبة",v1p:"صفحات هبوط ومواقع أعمال تعمل جيداً على الموبايل والكمبيوتر.",
  v2t:"مواقع مطاعم وأعمال",v2p:"مواقع نظيفة تعرض القائمة والخدمات وبيانات التواصل.",
  v3t:"من التصميم إلى الكود",v3p:"تحويل تصميم جاهز إلى صفحة ويب متجاوبة.",
  v4t:"قواعد البيانات وSQL",v4p:"تصميم قواعد بيانات بسيطة ورسم ERD وكتابة استعلامات SQL.",
  v5t:"تطبيقات C#",v5p:"تطبيقات Console بلغة C# باستخدام مبادئ البرمجة كائنية التوجه.",
  v6t:"Full Stack .NET",v6p:"أبني تطبيقات ASP.NET Core وSQL Server ضمن تدريبي في DEPI.",
  l_proj:"المشاريع",h_proj:"أبرز المشاريع",
  p1g:"مشروع شخصي / بأسلوب العمل الحر",p1t:"Nour Style للتجارة الإلكترونية",
  p1p:"فكرة متجر أزياء إلكتروني ثنائي اللغة، لنقل نشاط بيع الملابس من السوشيال ميديا إلى تجربة تسوق كاملة: واجهة عربي / إنجليزي، كتالوج ومنتجات وأقسام، فلترة بالمقاس واللون، سلة مشتريات، خطوات الدفع، تصميم متجاوب، وتصور للوحة تحكم.",
  p1n:"بوابات الدفع غير مربوطة؛ خطوة الدفع مجرد تصميم للمسار.",
  l_act:"الأنشطة",h_act:"المسابقات والتدريب",
  t1:"شاركت في أنشطة برمجة تنافسية: حل مشكلات وخوارزميات وتفكير منطقي.",t2:"حضرت تدريباً تقنياً ومهنياً.",t3t:"فعاليات تقنية",t3p:"حضرت فعاليات وورش عمل تقنية لمواصلة التعلم.",
  l_contact:"تواصل",h_contact:"لنعمل معاً",c_p:"تبحث عن متدرب أو فرصة مبتدئة أو موقع لمشروعك؟ تواصل معي.",
  c1:"البريد الإلكتروني",c2:"الهاتف",c3:"أرسل رسالة",top:"العودة للأعلى"
};
const $$ = (s) => document.querySelectorAll(s);
const EN = {};
$$('[data-i18n]').forEach(e => EN[e.dataset.i18n] = e.textContent);
const altEN = document.querySelector('[data-i18n-alt]').alt;
const root = document.documentElement;
const get = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const set = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

function setLang(l) {
  const ar = l === 'ar', d = ar ? AR : EN;
  root.lang = l; root.dir = ar ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(e => { e.textContent = d[e.dataset.i18n] ?? EN[e.dataset.i18n]; });
  document.querySelector('[data-i18n-alt]').alt = ar ? AR.alt : altEN;
  document.getElementById('lang').textContent = ar ? 'EN' : 'AR';
  document.title = ar ? 'محمد أمجد سيد | مطوّر Full Stack .NET' : 'Mohamed Amgad Sayed | Full Stack .NET Developer';
  set('lang', l);
}
function setTheme(t) {
  root.dataset.theme = t;
  document.getElementById('theme').textContent = t === 'dark' ? '☀' : '☾';
  set('theme', t);
}
document.getElementById('lang').onclick = () => setLang(root.lang === 'ar' ? 'en' : 'ar');
document.getElementById('theme').onclick = () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
if (get('lang') === 'ar') setLang('ar');
setTheme(get('theme') || 'dark');

const links = [...$$('#links a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section').forEach(s => io.observe(s));
