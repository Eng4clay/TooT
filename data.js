/* ============ TOOT — بيانات الموقع (عدّلها بسهولة) ============ */
/* كل نص ثنائي اللغة بصيغة [عربي, English] */
const SITE={phone:'0558421989',wa:'966558421989',web:'www.toot.sa',ig:'toot_sa',email:'info@toot.sa',
 googleReviewsUrl:'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review', // ← ضع رابط تقييمات Google Business الخاص بك
 adminUser:'admin',adminPass:'toot2026', // ← تجريبي فقط: غيّرها، والأفضل ربط خادم حقيقي
 vat:0.15};
const IMG={hero:'images/coffee-hero.jpg',pen:'images/penne.jpg',omelet:'images/omelet.jpg',des:'images/desserts.jpg',des2:'images/desserts2.jpg',ras:'images/raspberry.jpg',cro:'images/croissant.jpg',chaf:'images/chafers.jpg',bread:'images/bread.jpg',kabsa:'images/kabsa.jpg',beef:'images/beef.jpg',chk:'images/chicken-veg.jpg',beans:'images/chicken-beans.jpg',shr:'images/shrimp.jpg',fried:'images/fried.jpg',table:'images/table.jpg'};
const CITIES=[['الرياض','Riyadh'],['جدة','Jeddah'],['مكة المكرمة','Makkah'],['المدينة المنورة','Madinah'],['الدمام','Dammam'],['الخبر','Khobar'],['جازان','Jazan'],['أبها','Abha'],['تبوك','Tabuk'],['بريدة','Buraydah'],['الطائف','Taif'],['أخرى','Other']];
const OCCASIONS=[['حفل زواج','Wedding'],['تخرج','Graduation'],['مؤتمر','Conference'],['معرض','Exhibition'],['اجتماع شركة','Corporate meeting'],['مناسبة عائلية','Family event'],['أخرى','Other']];
const BUFFET_TYPES=[
 {id:'saudi',t:['بوفيه سعودي','Saudi Buffet'],items:[['الكبسة','Kabsa'],['الجريش','Jareesh'],['القرصان','Qursan'],['المضغوط','Madghout']],pp:65,img:IMG.kabsa},
 {id:'eastern',t:['بوفيه شرقي','Eastern Buffet'],items:[['المشويات','Grills'],['المقبلات','Mezze'],['الحلويات','Sweets']],pp:70,img:IMG.beef},
 {id:'intl',t:['بوفيه عالمي','International Buffet'],items:[['إيطالي','Italian'],['آسيوي','Asian'],['فرنسي','French'],['أمريكي','American']],pp:85,img:IMG.shr},
 {id:'events',t:['بوفيه المناسبات','Events Buffet'],items:[['حفلات الزواج','Weddings'],['التخرج','Graduations'],['المؤتمرات','Conferences'],['المعارض','Exhibitions']],pp:95,img:IMG.chk}];
const COFFEES=[['قهوة مختصة','Specialty coffee',18],['قهوة عربية','Arabic coffee',12],['إسبريسو','Espresso',15],['كابتشينو','Cappuccino',16],['لاتيه','Latte',16],['V60','V60',22],['كولد برو','Cold brew',20]];
const APPS=[['مالحة (ميني ساندويتش، كانابيه، كيش، ميني برغر)','Savory (mini sandwiches, canapés, quiche, mini burgers)',14],['حلويات (ماكرون، تشيز كيك، براونيز، ميني تارت)','Sweets (macarons, cheesecake, brownies, mini tarts)',12],['تشكيلة مختلطة','Mixed selection',22]];
const DIETS=[['نباتي','Vegetarian'],['كيتو','Keto'],['صحي','Healthy'],['خالي من الجلوتين','Gluten-free'],['خالي من السكر','Sugar-free']];
const BOXES=[
 {id:'eco',t:['الاقتصادية','Economy'],p:22,img:IMG.chk,d:['طبق رئيسي + سلطة + مشروب','Main + salad + drink']},
 {id:'std',t:['القياسية','Standard'],p:32,img:IMG.beans,d:['طبق رئيسي + سلطة + حلوى + مشروب','Main + salad + dessert + drink']},
 {id:'exe',t:['التنفيذية','Executive'],p:45,img:IMG.beef,d:['طبق رئيسي فاخر + سلطة + حلوى + مشروب + أدوات','Premium main + salad + dessert + drink + cutlery']},
 {id:'vip',t:['VIP','VIP'],p:65,img:IMG.shr,d:['تشكيلة VIP متكاملة بتغليف فاخر','Full VIP selection, premium packaging']}];
const SUBS=[['يومي','Daily',0],['أسبوعي','Weekly',.05],['شهري','Monthly',.10],['سنوي','Yearly',.18]];
const MEALS=[
 {id:'m1',t:['باستا بالدجاج والصلصة الحمراء','Chicken Penne Arrabbiata'],img:IMG.pen,p:46,cal:520,pr:38,cb:58,fat:14,ing:[['مكرونة بيني','دجاج مشوي','صلصة طماطم','جبنة بارميزان','أعشاب'],['Penne','Grilled chicken','Tomato sauce','Parmesan','Herbs']],cat:'balanced'},
 {id:'m2',t:['أومليت الخضار','Garden Veggie Omelet'],img:IMG.omelet,p:34,cal:340,pr:24,cb:9,fat:22,ing:[['بيض','فلفل ملوّن','فطر','سبانخ'],['Eggs','Bell peppers','Mushroom','Spinach']],cat:'weight'},
 {id:'m3',t:['دجاج مشوي مع خضار','Grilled Chicken & Veggies'],img:IMG.chk,p:44,cal:410,pr:44,cb:16,fat:18,ing:[['صدر دجاج','بروكلي','جزر','بصل أحمر'],['Chicken breast','Broccoli','Carrots','Red onion']],cat:'sports'},
 {id:'m4',t:['روبيان مشوي بالخضار','Grilled Shrimp & Veg'],img:IMG.shr,p:55,cal:380,pr:36,cb:18,fat:16,ing:[['روبيان','فلفل','أعشاب','زيت زيتون'],['Shrimp','Peppers','Herbs','Olive oil']],cat:'weight'},
 {id:'m5',t:['لحم مشوي مع خضار','Beef & Vegetables'],img:IMG.beef,p:52,cal:480,pr:42,cb:14,fat:26,ing:[['لحم بقري','فلفل','بروكلي','بصل'],['Beef','Peppers','Broccoli','Onion']],cat:'sports'},
 {id:'m6',t:['أرز برياني بالمكسرات','Nutty Biryani Rice'],img:IMG.kabsa,p:42,cal:610,pr:30,cb:78,fat:20,ing:[['أرز بسمتي','لحم/دجاج','كاجو','بهارات'],['Basmati rice','Meat/Chicken','Cashew','Spices']],cat:'balanced'},
 {id:'m7',t:['دجاج بالفاصولياء والأعشاب','Chicken & Beans'],img:IMG.beans,p:40,cal:450,pr:40,cb:32,fat:14,ing:[['دجاج','فاصولياء','طماطم كرزية','كزبرة'],['Chicken','Beans','Cherry tomato','Coriander']],cat:'healthy'},
 {id:'m8',t:['كرواسون السالمون','Salmon Croissant'],img:IMG.cro,p:36,cal:430,pr:20,cb:36,fat:22,ing:[['كرواسون','سالمون مدخن','خس','شبت'],['Croissant','Smoked salmon','Lettuce','Dill']],cat:'healthy'}];
const PLANS=[['اشتراك صحي','Healthy plan',0],['اشتراك رياضي','Sports plan',10],['اشتراك متوازن','Balanced plan',0],['اشتراك إدارة الوزن','Weight-management plan',5]];
const SERVICES=[
 {r:'buffet',t:['بوفيهات مفتوحة','Open Buffets'],d:['لمناسباتكم الخاصة والعامة','For private & public occasions'],img:IMG.chaf},
 {r:'coffee',t:['استراحات القهوة','Coffee Breaks'],d:['مقبلات خفيفة وتجربة مميزة','Light bites & a refined experience'],img:IMG.des},
 {r:'lunch',t:['علب الغداء','Lunch Boxes'],d:['للشركات والمدارس والمصانع','For companies, schools & factories'],img:IMG.beans},
 {r:'meals',t:['وجبات توت','Toot Meals'],d:['خيارات صحية ومغذية','Healthy, balanced options'],img:IMG.pen},
 {r:'hotels',t:['الفنادق والمطاعم','Hotels & Restaurants'],d:['إدارة وتشغيل متكاملة','Full management & operation'],img:IMG.table}];
const HOTEL_SVC=[['تشغيل المطاعم','Restaurant operation','🍽️'],['إدارة المطاعم','Restaurant management','📋'],['تشغيل المطابخ المركزية','Central kitchen operation','🏭'],['استشارات الأغذية والمشروبات','F&B consulting','💡'],['إدارة الولائم','Banquet management','🎉'],['تطوير القوائم','Menu development','📖'],['تدريب الموظفين','Staff training','🎓']];
const WHY=[['⭐','أعلى معايير الجودة','Top quality standards'],['👨‍🍳','طهاة محترفون','Professional chefs'],['⚙️','إدارة تشغيل متخصصة','Specialized operations'],['⏰','التزام بالمواعيد','On-time delivery'],['🎨','مرونة التخصيص','Flexible customization'],['🗺️','تغطية جميع مناطق المملكة','Nationwide coverage'],['🏢','حلول للمؤسسات والأفراد','Solutions for businesses & individuals'],['🛡️','سلامة غذائية عالمية','Global food safety'],['🎧','دعم فني وخدمة عملاء 24/7','24/7 support & customer care']];
const VALUES=[['الجودة','Quality'],['الكرم','Generosity'],['الابتكار','Innovation'],['الاستدامة','Sustainability'],['الاحترافية','Professionalism']];
const REVIEW_CRIT=[['جودة الطعام','Food quality'],['جودة التقديم','Presentation'],['سرعة التوصيل','Delivery speed'],['الاحترافية','Professionalism'],['النظافة','Cleanliness'],['القيمة مقابل السعر','Value for money']];
const SEED_REVIEWS=[
 {n:['شركة عميلة','Corporate client'],c:['أفضل تجربة بوفيه تعاملنا معها','The best buffet experience we have worked with'],r:5},
 {n:['عميل مؤسسي','Business client'],c:['التزام رائع وجودة ممتازة','Great commitment and excellent quality'],r:5},
 {n:['مسؤولة مشتريات','Procurement manager'],c:['وجبات الشركات تصل دائمًا في الوقت المحدد','Corporate meals always arrive on time'],r:5}];
const BLOG=[
 {id:'b1',cat:['الضيافة','Hospitality'],img:IMG.chaf,t:['كيف تختار بوفيه مناسبًا لمؤتمرك؟','How to choose the right buffet for your conference'],b:['ابدأ بعدد الحضور ومدة الفعالية، ثم حدّد نوع المطبخ بحسب جنسيات الضيوف. اجعل نسبة الأصناف الساخنة إلى الباردة متوازنة، وخصّص ركنًا للخيارات النباتية. أخيرًا اطلب تجربة طعام مسبقة قبل التعاقد.','Start with guest count and duration, then pick cuisines to suit your audience. Balance hot and cold dishes, add a vegetarian corner, and request a tasting before you sign.']},
 {id:'b2',cat:['استراحات القهوة','Coffee breaks'],img:IMG.des,t:['5 أفكار لاستراحة قهوة لا تُنسى','5 ideas for a memorable coffee break'],b:['ركن قهوة مختصة بباريستا، حلويات فردية، مشروبات باردة موسمية، خيارات صحية، وتقديم أنيق بإضاءة هادئة. التفاصيل الصغيرة تصنع الفرق.','A specialty coffee corner with a barista, individual desserts, seasonal cold drinks, healthy options and elegant presentation. Small details make the difference.']},
 {id:'b3',cat:['التغذية','Nutrition'],img:IMG.chk,t:['وجبة الغداء في العمل: كيف توازن الطاقة والتركيز؟','Workday lunch: balancing energy and focus'],b:['اختر بروتينًا خفيفًا مع كربوهيدرات معقدة وخضار طازجة، وتجنّب الوجبات الثقيلة بالدهون وقت الظهيرة. الماء ضروري طوال اليوم.','Choose lean protein with complex carbs and fresh vegetables, avoid heavy fatty meals at midday, and keep hydrated.']},
 {id:'b4',cat:['إدارة الفعاليات','Events'],img:IMG.table,t:['قائمة تحقق لتنظيم مناسبة ضيافة ناجحة','A checklist for a successful catering event'],b:['حدّد الميزانية، ثبّت العدد قبل الموعد بـ 72 ساعة، راجع المتطلبات الغذائية، جهّز مسار الخدمة، وحدّد مسؤولًا واحدًا للتواصل مع فريق الضيافة.','Set the budget, lock numbers 72 hours ahead, review dietary needs, plan service flow, and name a single point of contact.']},
 {id:'b5',cat:['المطاعم والفنادق','Hotels & restaurants'],img:IMG.beef,t:['تطوير قائمة الطعام: متى تحتاج مطعمك إلى تحديث؟','Menu development: when does your restaurant need a refresh?'],b:['إذا انخفضت مبيعات أصناف بعينها أو ارتفعت تكلفة المكونات، فالوقت مناسب لهندسة القائمة وإعادة تسعيرها وإضافة أصناف موسمية.','When certain items slow down or ingredient costs rise, it is time for menu engineering, re-pricing and seasonal additions.']},
 {id:'b6',cat:['الضيافة','Hospitality'],img:IMG.ras,t:['لماذا تهم السلامة الغذائية في الفعاليات الكبرى؟','Why food safety matters at large events'],b:['التحكم في درجات الحرارة، فصل الخامات، نظافة الفريق، وتتبع الدفعات هي أساس تقديم طعام آمن لأعداد كبيرة.','Temperature control, separating raw items, staff hygiene and batch traceability are the basis of safe service at scale.']}];
const JOBS=[['طاهٍ تنفيذي','Executive Chef','الرياض','Riyadh'],['مساعد طاهٍ','Sous Chef','جدة','Jeddah'],['باريستا','Barista','الرياض','Riyadh'],['مشرف ضيافة','Hospitality Supervisor','الدمام','Dammam'],['سائق توصيل','Delivery Driver','جازان','Jazan'],['مسؤول مبيعات شركات','Corporate Sales Executive','الرياض','Riyadh']];
const BRANCHES=[['الرياض (المقر الرئيسي)','Riyadh (HQ)','قم بتعديل العنوان في data.js','Edit address in data.js'],['جدة','Jeddah','قم بتعديل العنوان في data.js','Edit address in data.js']];
const PARTNER_GROUPS=[['شركات','Companies'],['جهات حكومية','Government'],['جامعات','Universities'],['فنادق','Hotels']];
const GALLERY=Object.values(IMG).filter(x=>x!==IMG.hero);
const FAQ=[
['ما هي خدمات توت؟','What does Toot offer?','نقدم بوفيهات مفتوحة، استراحات قهوة ومقبلات، علب غداء، وجبات توت الصحية، وإدارة وتشغيل الفنادق والمطاعم.','Open buffets, coffee breaks, lunch boxes, Toot healthy meals, and hotel & restaurant management.'],
['كم أقل عدد ضيوف للبوفيه المفتوح؟','What is the minimum number of guests for a buffet?','تبدأ باقاتنا من 40 ضيفًا وتصل إلى 150 ضيفًا وأكثر بحسب عدد السخانات.','Our packages start from 40 guests and go up to 150+ depending on the number of chafing dishes.'],
['كم عدد السخانات المتاحة؟','How many chafing dishes are available?','باقات مرنة من 4 إلى 12 سخانًا تحافظ على حرارة الأصناف.','Flexible packages from 4 to 12 chafing dishes that keep food hot.'],
['هل تغطون جميع مناطق المملكة؟','Do you cover all regions of Saudi Arabia?','نعم، نغطي مناطق المملكة وفق جدولة مسبقة؛ تواصل معنا لتأكيد مدينتك.','Yes, by prior scheduling. Contact us to confirm your city.'],
['كم قبل المناسبة يجب أن أحجز؟','How early should I book?','ننصح بالحجز قبل 7 أيام على الأقل، وللمناسبات الكبرى قبل 14 يومًا أو أكثر.','We recommend at least 7 days ahead, and 14+ days for large events.'],
['هل يمكن تعديل عدد الضيوف بعد الحجز؟','Can I change the guest count after booking?','نعم، حتى 72 ساعة قبل الموعد دون رسوم، وبعدها حسب إمكانية التجهيز.','Yes, up to 72 hours before without fees; later subject to preparation capacity.'],
['ما الأطباق في البوفيه السعودي؟','What is in the Saudi buffet?','الكبسة والجريش والقرصان والمضغوط وغيرها، ويمكن تخصيص القائمة.','Kabsa, Jareesh, Qursan, Madghout and more; the menu can be customized.'],
['هل لديكم بوفيه عالمي؟','Do you offer international buffets?','نعم: إيطالي وآسيوي وفرنسي وأمريكي.','Yes: Italian, Asian, French and American.'],
['هل تقدمون خيارات نباتية؟','Do you offer vegetarian options?','نعم، نباتي وكيتو وصحي وخالٍ من الجلوتين والسكر.','Yes: vegetarian, keto, healthy, gluten-free and sugar-free.'],
['هل تراعون الحساسية الغذائية؟','Do you handle food allergies?','أخبرنا بالحساسية عند الطلب وسنعدّ بدائل آمنة ونوضح المكونات.','Tell us when ordering and we will prepare safe alternatives and list ingredients.'],
['هل الطعام حلال؟','Is the food halal?','نعم، جميع منتجاتنا حلال بالكامل.','Yes, all our products are fully halal.'],
['هل توفرون الأدوات والصحون؟','Do you provide tableware?','نعم، تشمل الباقات الصحون والأدوات والمناديل؛ ويمكن إضافة تأجير معدات.','Yes, packages include plates, cutlery and napkins; equipment rental can be added.'],
['هل يوجد فريق خدمة في الموقع؟','Is a service team on site?','نعم، يمكن إضافة فريق ضيافة وطهاة بحسب حجم المناسبة.','Yes, hospitality staff and chefs can be added based on event size.'],
['كيف أطلب عرض سعر؟','How do I request a quote?','من نموذج «اطلب عرض سعر» أو عبر واتساب أو الاتصال، وسنرد خلال ساعات العمل.','Via the quote form, WhatsApp or phone; we reply within business hours.'],
['كم يستغرق الرد على عرض السعر؟','How long until I get a quote?','عادةً خلال يوم عمل واحد.','Usually within one business day.'],
['ما طرق الدفع؟','Which payment methods are accepted?','مدى، أبل باي، فيزا، ماستركارد، والتحويل البنكي.','Mada, Apple Pay, Visa, Mastercard and bank transfer.'],
['هل الأسعار شاملة الضريبة؟','Are prices VAT inclusive?','تُعرض الأسعار قبل ضريبة القيمة المضافة 15% وتُضاف عند الدفع.','Prices are shown before 15% VAT, added at checkout.'],
['هل توجد دفعة مقدمة؟','Is a deposit required?','للمناسبات الكبرى نطلب دفعة مقدمة لتأكيد الحجز، وتُحدد في العرض.','For large events a deposit confirms the booking; it is stated in the quote.'],
['ما سياسة الإلغاء؟','What is the cancellation policy?','الإلغاء قبل 72 ساعة مجاني؛ وبعدها قد تُطبق رسوم التجهيز.','Free cancellation up to 72 hours before; later, preparation fees may apply.'],
['هل أستطيع تجربة الأطعمة قبل التعاقد؟','Can I taste before contracting?','نعم، للعقود والمناسبات الكبرى نرتب جلسة تذوق.','Yes, tasting sessions are available for contracts and large events.'],
['ما هي علب الغداء المتوفرة؟','Which lunch boxes are available?','اقتصادية، قياسية، تنفيذية وVIP.','Economy, Standard, Executive and VIP.'],
['ماذا تحتوي علبة الغداء؟','What does a lunch box contain?','طبق رئيسي وسلطة وحلوى ومشروب وأدوات تناول الطعام.','A main dish, salad, dessert, drink and cutlery.'],
['هل تقدمون اشتراكات للشركات؟','Do you offer corporate subscriptions?','نعم: يومي وأسبوعي وشهري وسنوي مع خصومات على الاشتراكات الأطول.','Yes: daily, weekly, monthly and yearly, with discounts on longer plans.'],
['هل يمكن تغيير الكميات والمواقع؟','Can quantities and locations change?','نعم، من لوحة تحكم العميل في حسابك.','Yes, from your account dashboard.'],
['هل أستطيع تحميل الفواتير؟','Can I download invoices?','نعم، من قسم الفواتير في حسابك.','Yes, from the invoices section of your account.'],
['هل تخدمون المدارس والمصانع؟','Do you serve schools and factories?','نعم، لدينا حلول مخصصة للمدارس والمصانع والجهات الحكومية.','Yes, tailored solutions for schools, factories and government bodies.'],
['ما الحد الأدنى لعقود علب الغداء؟','Minimum order for lunch box contracts?','يختلف بحسب المدينة وعدد الموظفين؛ اطلب عرضًا فوريًا.','It varies by city and headcount; request an instant quote.'],
['ما هي وجبات توت؟','What are Toot Meals?','وجبات صحية طازجة يوميًا بسعرات محسوبة ومكونات عالية الجودة.','Fresh daily healthy meals with counted calories and quality ingredients.'],
['ما أنواع الاشتراك الغذائي؟','Which meal plans exist?','صحي، رياضي، متوازن، وإدارة الوزن.','Healthy, sports, balanced and weight management.'],
['هل أستطيع اختيار السعرات؟','Can I choose my calories?','نعم، تختار السعرات وعدد الوجبات والمكونات.','Yes: calories, meals per day and ingredients.'],
['هل القيم الغذائية دقيقة؟','Are nutrition values accurate?','القيم تقديرية وقد تختلف قليلًا؛ ولا تغني عن استشارة أخصائي تغذية.','Values are estimates and may vary; they do not replace a dietitian\'s advice.'],
['هل يمكن إيقاف الاشتراك مؤقتًا؟','Can I pause my subscription?','نعم، بطلب قبل 48 ساعة من الدورة التالية.','Yes, with 48 hours notice before the next cycle.'],
['هل القوائم تتجدد؟','Do menus change?','نعم، قوائمنا تتجدد دوريًا.','Yes, menus are refreshed regularly.'],
['ما أنواع القهوة المتوفرة؟','Which coffees do you serve?','مختصة وعربية وإسبريسو وكابتشينو ولاتيه وV60 وكولد برو.','Specialty, Arabic, espresso, cappuccino, latte, V60 and cold brew.'],
['هل يوجد باريستا؟','Is a barista available?','نعم، يمكن اختيار باريستا وأدوات القهوة وتصميم الركن.','Yes, you can choose a barista, equipment and corner design.'],
['كيف تُحسب تكلفة استراحة القهوة؟','How is a coffee break priced?','بحسب عدد الضيوف ومدة المناسبة ونوع القهوة والمقبلات؛ استخدم الحاسبة الفورية.','By guests, duration, coffee and bites; use the instant calculator.'],
['هل تقدمون خدمات للفنادق والمطاعم؟','Do you serve hotels and restaurants?','نعم: تشغيل وإدارة وتطوير قوائم وتدريب واستشارات.','Yes: operation, management, menu development, training and consulting.'],
['هل تشغّلون المطابخ المركزية؟','Do you run central kitchens?','نعم، نشغّل المطابخ المركزية وندير سلاسل الإمداد.','Yes, we operate central kitchens and supply flows.'],
['كيف أطلب استشارة؟','How do I request a consultation?','عبر نموذج الاستشارة في صفحة الفنادق والمطاعم.','Through the consultation form on the Hotels & Restaurants page.'],
['هل لديكم تطبيق جوال؟','Do you have a mobile app?','الموقع متوافق مع الجوال بالكامل ويمكن تثبيته كتطبيق على الشاشة الرئيسية.','The site is fully mobile-ready and installable to your home screen.'],
['كيف أنشئ حسابًا؟','How do I create an account?','اضغط «تسجيل الدخول» ثم «حساب جديد».','Click “Log in” then “New account”.'],
['كيف أتتبع طلبي؟','How do I track my order?','من حسابي ← الطلبات الحالية.','Account → Current orders.'],
['هل يمكنني استخدام كود خصم؟','Can I use a discount code?','نعم، أدخله في صفحة السلة.','Yes, enter it on the cart page.'],
['كيف أقيّم الخدمة؟','How do I rate the service?','من صفحة التقييمات تختار من 1 إلى 5 نجوم لكل عنصر.','From the Reviews page, rate from 1 to 5 stars per criterion.'],
['كيف أتواصل مع الدعم؟','How do I contact support?','دردشة مباشرة، واتساب، اتصال، بريد، أو تذكرة إلكترونية.','Live chat, WhatsApp, phone, email or an online ticket.'],
['ما ساعات الدعم؟','Support hours?','دعم العملاء متاح على مدار الساعة 24/7 للطلبات القائمة.','Customer care is available 24/7 for existing orders.'],
['كيف أقدّم على وظيفة؟','How do I apply for a job?','من صفحة الوظائف، وارفع سيرتك الذاتية وتابع الطلب.','From the Careers page: upload your CV and track the application.'],
['هل توفرون تغليفًا مستدامًا؟','Do you offer sustainable packaging?','نعمل على تقليل البلاستيك وتوفير خيارات تغليف قابلة لإعادة التدوير.','We reduce plastic and provide recyclable packaging options.'],
['كيف تضمنون سلامة الغذاء؟','How do you ensure food safety?','التزام بمعايير السلامة الغذائية وضبط درجات الحرارة وتتبع الدفعات.','We follow food-safety standards, temperature control and batch traceability.'],
['هل تقدمون خدمة VIP؟','Do you offer VIP service?','نعم، علبة VIP وبوفيهات فاخرة وخدمة مخصصة.','Yes: VIP boxes, premium buffets and tailored service.'],
['هل يمكن تخصيص القائمة بالكامل؟','Can the menu be fully customized?','نعم، نصمم القائمة بحسب مناسبتك وميزانيتك.','Yes, we design it around your occasion and budget.'],
['هل تخدمون مناسبات الزواج والتخرج؟','Do you cater weddings and graduations?','نعم، وكذلك المؤتمرات والمعارض والفعاليات المؤسسية.','Yes, plus conferences, exhibitions and corporate events.'],
['كيف أحجز الآن؟','How do I book now?','اضغط «احجز الآن» أو راسلنا على واتساب.','Press “Book now” or message us on WhatsApp.']];
/* بيانات تجريبية للوحة الإدارة */
const SEED={
 customers:[['شركة الأفق','شركة','الرياض','0501110001'],['مؤسسة النخبة','مؤسسة','جدة','0502220002'],['جامعة المستقبل','جامعة','الدمام','0503330003'],['فندق الواحة','فندق','الرياض','0504440004'],['أ. سارة العتيبي','فرد','الرياض','0505550005']],
 contracts:[['شركة الأفق','علب غداء تنفيذية','شهري','120 موظف','2026-12-31','active'],['جامعة المستقبل','استراحات قهوة','سنوي','—','2027-06-30','active'],['مصنع الريادة','علب غداء قياسية','أسبوعي','300 موظف','2026-11-30','review']],
 staff:[['طاهٍ تنفيذي','الرياض','مطبخ','active'],['مشرف ضيافة','جدة','عمليات','active'],['باريستا','الرياض','قهوة','active'],['سائق','الدمام','أسطول','leave'],['محاسب','الرياض','مالية','active']],
 fleet:[['شاحنة مبردة 1','ABC 1234','الرياض','في الخدمة'],['فان توصيل 2','DEF 5678','جدة','صيانة'],['فان توصيل 3','GHI 9012','الدمام','في الخدمة'],['دراجة توصيل 4','—','الرياض','في الخدمة']],
 inventory:[['أرز بسمتي','كجم',320,100],['دجاج','كجم',180,120],['لحم','كجم',90,80],['بن مختص','كجم',40,25],['علب غداء','حبة',1500,800],['أكواب ورقية','حبة',3000,1500],['زيت','لتر',60,40],['خضار','كجم',75,60]],
 revenue:[['يوليو','Jul',210],['أغسطس','Aug',240],['سبتمبر','Sep',265],['أكتوبر','Oct',310],['نوفمبر','Nov',290]]};
