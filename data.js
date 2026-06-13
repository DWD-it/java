// ============================================
// JAVA STUDY HUB - Course Data
// All content from Borg El Arab Technological University
// Java Programming Course 2025/2026
// ============================================

const WEEKS_DATA = [
    // ===== WEEK 1 =====
    {
        id: 1,
        num: "W1",
        title: "مقدمة في الجافا وأساسياتها",
        titleEn: "Introduction to Java & Basics",
        topics: ["What is Java", "Data Types", "Variables", "Comments", "Identifiers"],
        content: `
<div class="content-section">
    <h3>🎯 ما هي الجافا؟ | What is Java?</h3>
    <p class="content-text">الجافا هي لغة برمجة شهيرة جداً اتعملت سنة 1995 وملكها Oracle. أكتر من 3 مليار جهاز بيشغل جافا! بتستخدم في تطبيقات الموبايل (خاصة أندرويد)، تطبيقات الديسكتوب، الويب، السيرفرات، الألعاب، وغيرها كتير.</p>
    <p class="content-text en">Java is a popular programming language created in 1995. It is owned by Oracle, and more than 3 billion devices run Java. Used for: Mobile apps (Android), Desktop apps, Web apps, Games, and much more!</p>

    <h4>🔥 ليه نستخدم جافا؟ | Why Use Java?</h4>
    <div class="info-box">
        <h5>💡 مميزات الجافا</h5>
        <p>✅ بتشتغل على أنظمة مختلفة (Windows, Mac, Linux)<br>
        ✅ من أشهر لغات البرمجة في العالم<br>
        ✅ الطلب عليها كبير في سوق العمل<br>
        ✅ سهلة التعلم ومفتوحة المصدر ومجانية<br>
        ✅ آمنة وسريعة وقوية<br>
        ✅ لغة Object Oriented بتخلي الكود منظم وقابل لإعادة الاستخدام</p>
    </div>

    <h4>⚙️ إزاي الجافا بتشتغل؟ | How Java Works?</h4>
    <p class="content-text">الجافا بتشتغل بنظام خاص: الكود بتاعك (Source Code) بيتحول لـ Bytecode عن طريق الـ Compiler، وبعدين الـ JVM (Java Virtual Machine) بتشغله على أي نظام. ده اللي بيخلي الجافا تشتغل على أي جهاز!</p>
    <p class="content-text en">Java code (Source Code) is compiled into Bytecode by the Java Compiler, then the JVM (Java Virtual Machine) runs it on any platform. This is what makes Java platform-independent!</p>

    <h4>📝 أول برنامج جافا | First Java Program</h4>
    <p class="content-text">في الجافا، كل برنامج لازم يبدأ بـ class واسم الكلاس لازم يكون نفس اسم الملف.</p>
    <div class="code-block"><span class="code-label">HelloWorld.java</span><code><span class="kw">public class</span> <span class="cls">Test</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Hello World"</span>);
    }
}</code></div>
    <div class="info-box warning">
        <h5>⚠️ ملاحظة مهمة</h5>
        <p>اسم الكلاس لازم يكون نفس اسم الملف بالظبط! لو الكلاس اسمه Test يبقى الملف لازم يكون Test.java</p>
    </div>

    <h4>💬 التعليقات | Comments</h4>
    <p class="content-text">التعليقات بتستخدم عشان تشرح الكود وما بتتنفذش. فيه نوعين:</p>
    <div class="code-block"><code><span class="cmt">// ده تعليق سطر واحد (Single-line comment)</span>

<span class="cmt">/* ده تعليق
   متعدد الأسطر
   (Multi-line comment) */</span></code></div>

    <h3>📊 أنواع البيانات | Data Types</h3>
    <p class="content-text">الجافا فيها 8 أنواع بيانات أساسية (Primitive Data Types):</p>
    <table class="content-table">
        <tr><th>النوع</th><th>الحجم</th><th>الوصف</th></tr>
        <tr><td><code>byte</code></td><td>1 byte</td><td>أعداد صحيحة من -128 لـ 127</td></tr>
        <tr><td><code>short</code></td><td>2 bytes</td><td>أعداد صحيحة من -32,768 لـ 32,767</td></tr>
        <tr><td><code>int</code></td><td>4 bytes</td><td>أعداد صحيحة (الأكثر استخداماً)</td></tr>
        <tr><td><code>long</code></td><td>8 bytes</td><td>أعداد صحيحة كبيرة جداً</td></tr>
        <tr><td><code>float</code></td><td>4 bytes</td><td>أرقام عشرية (6-7 أرقام بعد العلامة)</td></tr>
        <tr><td><code>double</code></td><td>8 bytes</td><td>أرقام عشرية (15 رقم بعد العلامة)</td></tr>
        <tr><td><code>boolean</code></td><td>1 bit</td><td>true أو false</td></tr>
        <tr><td><code>char</code></td><td>2 bytes</td><td>حرف واحد أو قيمة ASCII</td></tr>
    </table>

    <h4>📦 المتغيرات | Variables</h4>
    <p class="content-text">المتغيرات زي الصناديق اللي بنخزن فيها البيانات. كل متغير ليه نوع واسم وقيمة.</p>
    <div class="code-block"><code><span class="cls">String</span> name = <span class="str">"John"</span>;       <span class="cmt">// نص</span>
<span class="kw">int</span> myNum = <span class="num">15</span>;              <span class="cmt">// عدد صحيح</span>
<span class="kw">float</span> myFloat = <span class="num">5.99f</span>;      <span class="cmt">// عدد عشري</span>
<span class="kw">char</span> myLetter = <span class="str">'D'</span>;         <span class="cmt">// حرف</span>
<span class="kw">boolean</span> myBool = <span class="kw">true</span>;      <span class="cmt">// صح أو غلط</span>
<span class="kw">double</span> myDouble = <span class="num">19.99</span>;    <span class="cmt">// عدد عشري دقيق</span></code></div>

    <h4>🔒 المتغيرات الثابتة | Final Variables</h4>
    <p class="content-text">لو عايز المتغير ما يتغيرش أبداً، استخدم كلمة <code>final</code>. لو حاولت تغيره هيحصل Error!</p>
    <div class="code-block"><code><span class="kw">final int</span> myNum = <span class="num">15</span>;
myNum = <span class="num">20</span>;  <span class="cmt">// ❌ Error! cannot assign a value to a final variable</span></code></div>

    <h4>🏷️ قواعد التسمية | Identifiers Rules</h4>
    <div class="info-box success">
        <h5>✅ قواعد تسمية المتغيرات</h5>
        <p>✅ الأسماء ممكن تحتوي على حروف وأرقام و _ و $<br>
        ✅ لازم تبدأ بحرف (أو $ أو _)<br>
        ✅ تبدأ بحرف صغير ومافيهاش مسافات<br>
        ✅ الجافا Case Sensitive: يعني myVar مختلف عن myvar<br>
        ❌ ماينفعش تستخدم كلمات محجوزة زي int أو boolean كأسماء</p>
    </div>

    <h4>🔤 نوع الحرف | char Data Type</h4>
    <p class="content-text">نوع char بيخزن حرف واحد بين علامات تنصيص فردية. ممكن كمان تستخدم قيم ASCII:</p>
    <div class="code-block"><code><span class="kw">char</span> myGrade = <span class="str">'B'</span>;
<span class="kw">char</span> myVar1 = <span class="num">65</span>;  <span class="cmt">// A (ASCII value)</span>
<span class="kw">char</span> myVar2 = <span class="num">66</span>;  <span class="cmt">// B</span>
<span class="kw">char</span> myVar3 = <span class="num">67</span>;  <span class="cmt">// C</span></code></div>
</div>
        `,
        mcqQuestions: [
            { q: "What year was Java created?", options: ["1991", "1995", "2000", "2005"], answer: 1 },
            { q: "Which company owns Java?", options: ["Microsoft", "Google", "Oracle", "Apple"], answer: 2 },
            { q: "Which data type is used to store a single character?", options: ["String", "char", "int", "boolean"], answer: 1 },
            { q: "What is the size of an int in Java?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], answer: 2 },
            { q: "Which keyword makes a variable unchangeable?", options: ["const", "static", "final", "fixed"], answer: 2 },
            { q: "Which data type stores true or false values?", options: ["int", "boolean", "char", "String"], answer: 1 },
            { q: "What is the correct file extension for Java files?", options: [".js", ".java", ".jav", ".class"], answer: 1 },
            { q: "Which of the following is NOT a primitive data type?", options: ["int", "String", "boolean", "char"], answer: 1 },
            { q: "What is the output of: System.out.println(5 + 6);", options: ["56", "11", "5 + 6", "Error"], answer: 1 },
            { q: "Which symbol is used for single-line comments?", options: ["##", "//", "**", "@@"], answer: 1 },
            { q: "Java is case-sensitive. What does this mean?", options: ["It ignores letter case", "myVar and myvar are the same", "myVar and myvar are different", "Variables can't use uppercase"], answer: 2 },
            { q: "Which data type has 8 bytes size?", options: ["int", "float", "long", "short"], answer: 2 },
            { q: "What is the correct way to declare a String variable?", options: ['String s = "Hello"', 'string s = "Hello"', 'String s = Hello', "str s = 'Hello'"], answer: 0 },
            { q: "What is the range of byte data type?", options: ["-128 to 127", "0 to 255", "-256 to 255", "-1000 to 1000"], answer: 0 },
            { q: "Which method is used to print output in Java?", options: ["print()", "console.log()", "System.out.println()", "echo()"], answer: 2 },
            { q: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Monitor", "Java Verified Module"], answer: 0 },
            { q: "Which variable naming is correct?", options: ["1name", "my-name", "my name", "myName"], answer: 3 },
            { q: "What is the default value of an int variable?", options: ["null", "0", "1", "undefined"], answer: 1 },
            { q: "What is the size of double in Java?", options: ["4 bytes", "8 bytes", "2 bytes", "16 bytes"], answer: 1 },
            { q: "Which is a multi-line comment in Java?", options: ["// comment", "# comment", "/* comment */", "-- comment"], answer: 2 }
        ],
        essayQuestions: [
            { q: "Write a Java program called HelloJava.java that prints: 'Hello Java', your full name, and your department name.", hint: "Use System.out.println() for each line inside main method\n\nالـ Output المتوقع:\nHello Java", expectedOutput: "Hello Java" },
            { q: "Write a Java program that declares variables of types: String name, int age, float gpa, char grade, boolean isStudent. Assign values and print them.", hint: "Declare each variable with suitable values and use println to display" },
            { q: "Explain the difference between Widening Casting and Narrowing Casting with examples.", hint: "Widening: small to large (automatic), Narrowing: large to small (manual)" },
            { q: "What are the 8 primitive data types in Java? List them with their sizes.", hint: "byte(1), short(2), int(4), long(8), float(4), double(8), boolean(1 bit), char(2)" },
            { q: "Explain what 'final' keyword does in Java and give a code example showing what happens when you try to change a final variable.", hint: "final makes variable constant. Changing it causes compilation error." }
        ]
    },

    // ===== WEEK 2 =====
    {
        id: 2,
        num: "W2",
        title: "التحويلات والعمليات والجمل الشرطية",
        titleEn: "Type Casting, Operators & Conditional Statements",
        topics: ["Type Casting", "Scanner", "Operators", "if/else", "Switch", "Ternary"],
        content: `
<div class="content-section">
    <h3>🔄 تحويل الأنواع | Type Casting</h3>
    <p class="content-text">تحويل الأنواع هو إنك تحول قيمة من نوع بيانات لنوع تاني. فيه نوعين:</p>

    <h4>1️⃣ التحويل التلقائي (Widening) - من صغير لكبير</h4>
    <p class="content-text en">byte → short → char → int → long → float → double</p>
    <div class="code-block"><code><span class="kw">int</span> myInt = <span class="num">9</span>;
<span class="kw">double</span> myDouble = myInt;  <span class="cmt">// Automatic: int to double</span>
<span class="cls">System</span>.out.<span class="fn">println</span>(myInt);     <span class="cmt">// 9</span>
<span class="cls">System</span>.out.<span class="fn">println</span>(myDouble);  <span class="cmt">// 9.0</span></code></div>

    <h4>2️⃣ التحويل اليدوي (Narrowing) - من كبير لصغير</h4>
    <p class="content-text en">double → float → long → int → char → short → byte</p>
    <div class="code-block"><code><span class="kw">double</span> myDouble = <span class="num">9.78</span>;
<span class="kw">int</span> myInt = (<span class="kw">int</span>) myDouble;  <span class="cmt">// Manual casting: double to int</span>
<span class="cls">System</span>.out.<span class="fn">println</span>(myDouble);  <span class="cmt">// 9.78</span>
<span class="cls">System</span>.out.<span class="fn">println</span>(myInt);     <span class="cmt">// 9</span></code></div>

    <h3>⌨️ إدخال المستخدم | Scanner (User Input)</h3>
    <p class="content-text">كلاس Scanner بيستخدم عشان ناخد إدخال من المستخدم. لازم نعمل import الأول.</p>
    <div class="code-block"><code><span class="kw">import</span> java.util.Scanner;
<span class="kw">public class</span> <span class="cls">Test</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="cls">Scanner</span> myObj = <span class="kw">new</span> <span class="cls">Scanner</span>(<span class="cls">System</span>.in);
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Enter name, age and salary:"</span>);
        <span class="cls">String</span> name = myObj.<span class="fn">nextLine</span>();
        <span class="kw">int</span> age = myObj.<span class="fn">nextInt</span>();
        <span class="kw">double</span> salary = myObj.<span class="fn">nextDouble</span>();
    }
}</code></div>
    <table class="content-table">
        <tr><th>Method</th><th>Description</th></tr>
        <tr><td><code>nextLine()</code></td><td>Reads a String</td></tr>
        <tr><td><code>nextInt()</code></td><td>Reads an int</td></tr>
        <tr><td><code>nextDouble()</code></td><td>Reads a double</td></tr>
        <tr><td><code>nextFloat()</code></td><td>Reads a float</td></tr>
        <tr><td><code>nextBoolean()</code></td><td>Reads a boolean</td></tr>
    </table>
    <div class="info-box danger">
        <h5>⚠️ مشكلة nextLine() بعد nextInt()</h5>
        <p>لو استخدمت nextLine() بعد nextInt() مباشرة، هتلاقي nextLine() بتقرأ السطر الفاضي! الحل: ضيف myObj.nextLine() إضافية بعد nextInt() لمسح الـ buffer.</p>
    </div>

    <h3>➕ العمليات | Operators</h3>
    <h4>العمليات الحسابية | Arithmetic Operators</h4>
    <table class="content-table">
        <tr><th>العملية</th><th>الاسم</th><th>مثال</th></tr>
        <tr><td>+</td><td>Addition (جمع)</td><td>x + y</td></tr>
        <tr><td>-</td><td>Subtraction (طرح)</td><td>x - y</td></tr>
        <tr><td>*</td><td>Multiplication (ضرب)</td><td>x * y</td></tr>
        <tr><td>/</td><td>Division (قسمة)</td><td>x / y</td></tr>
        <tr><td>%</td><td>Modulus (باقي القسمة)</td><td>x % y</td></tr>
        <tr><td>++</td><td>Increment (زيادة 1)</td><td>++x</td></tr>
        <tr><td>--</td><td>Decrement (نقصان 1)</td><td>--x</td></tr>
    </table>

    <h4>عمليات المقارنة | Comparison Operators</h4>
    <table class="content-table">
        <tr><th>العملية</th><th>المعنى</th></tr>
        <tr><td>==</td><td>يساوي</td></tr>
        <tr><td>!=</td><td>لا يساوي</td></tr>
        <tr><td>></td><td>أكبر من</td></tr>
        <tr><td><</td><td>أصغر من</td></tr>
        <tr><td>>=</td><td>أكبر من أو يساوي</td></tr>
        <tr><td><=</td><td>أصغر من أو يساوي</td></tr>
    </table>

    <h4>العمليات المنطقية | Logical Operators</h4>
    <table class="content-table">
        <tr><th>العملية</th><th>المعنى</th><th>مثال</th></tr>
        <tr><td>&&</td><td>AND (و) - لازم الاتنين صح</td><td>x < 5 && x < 10</td></tr>
        <tr><td>||</td><td>OR (أو) - واحد يكفي</td><td>x < 5 || x < 4</td></tr>
        <tr><td>!</td><td>NOT (عكس) - يعكس النتيجة</td><td>!(x < 5)</td></tr>
    </table>

    <h3>🔀 الجمل الشرطية | Conditional Statements</h3>
    <h4>1️⃣ جملة if / else if / else</h4>
    <div class="code-block"><code><span class="kw">int</span> time = <span class="num">22</span>;
<span class="kw">if</span> (time < <span class="num">10</span>) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Good morning."</span>);
} <span class="kw">else if</span> (time < <span class="num">18</span>) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Good day."</span>);
} <span class="kw">else</span> {
    <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Good evening."</span>);
}
<span class="cmt">// Output: Good evening.</span></code></div>

    <h4>2️⃣ Ternary Operator (اختصار if/else)</h4>
    <p class="content-text">variable = (condition) ? expressionTrue : expressionFalse;</p>
    <div class="code-block"><code><span class="kw">int</span> time = <span class="num">20</span>;
<span class="cls">String</span> result = (time < <span class="num">18</span>) ? <span class="str">"Good day."</span> : <span class="str">"Good evening."</span>;
<span class="cls">System</span>.out.<span class="fn">println</span>(result); <span class="cmt">// Good evening.</span></code></div>

    <h4>3️⃣ جملة Switch</h4>
    <p class="content-text">بدل ما تكتب if/else كتير، ممكن تستخدم switch. الـ break مهمة عشان توقف التنفيذ.</p>
    <div class="code-block"><code><span class="kw">int</span> day = <span class="num">4</span>;
<span class="kw">switch</span> (day) {
    <span class="kw">case</span> <span class="num">1</span>: <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Monday"</span>); <span class="kw">break</span>;
    <span class="kw">case</span> <span class="num">2</span>: <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Tuesday"</span>); <span class="kw">break</span>;
    <span class="kw">case</span> <span class="num">3</span>: <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Wednesday"</span>); <span class="kw">break</span>;
    <span class="kw">case</span> <span class="num">4</span>: <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Thursday"</span>); <span class="kw">break</span>;
    <span class="kw">default</span>: <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Weekend"</span>);
} <span class="cmt">// Output: Thursday</span></code></div>
    <div class="info-box warning">
        <h5>⚠️ لو نسيت break في switch</h5>
        <p>لو ما حطيتش break، الكود هيكمل تنفيذ كل الـ cases اللي بعد الـ case اللي اتطابق! ده اسمه "fall-through".</p>
    </div>
</div>
        `,
        mcqQuestions: [
            { q: "What is Widening Casting?", options: ["Manual conversion from large to small", "Automatic conversion from small to large", "Converting String to int", "None of the above"], answer: 1 },
            { q: "Which class is used for user input in Java?", options: ["Input", "Scanf", "Scanner", "Console"], answer: 2 },
            { q: "What is the output of: (int) 9.78?", options: ["9.78", "10", "9", "Error"], answer: 2 },
            { q: "Which operator returns the remainder of division?", options: ["/", "%", "//", "mod"], answer: 1 },
            { q: "What does && operator do?", options: ["Logical OR", "Logical AND", "Logical NOT", "Comparison"], answer: 1 },
            { q: "What is the ternary operator format?", options: ["if ? else", "condition ? true : false", "? condition : result", "condition ?? result"], answer: 1 },
            { q: "What happens if break is omitted in a switch case?", options: ["Error", "Only one case executes", "Execution continues to next cases", "Program stops"], answer: 2 },
            { q: "Which method reads an integer from Scanner?", options: ["readInt()", "nextInt()", "getInt()", "scanInt()"], answer: 1 },
            { q: "What is the output of: 5 > 3 && 2 < 1?", options: ["true", "false", "Error", "null"], answer: 1 },
            { q: "Which import is needed for Scanner?", options: ["java.io.Scanner", "java.util.Scanner", "java.scanner", "import Scanner"], answer: 1 },
            { q: "What is the correct way to do narrowing casting?", options: ["int x = double;", "int x = (int) myDouble;", "int x = myDouble;", "int x = convert(myDouble);"], answer: 1 },
            { q: "What is the result of: 10 % 3?", options: ["3", "1", "3.33", "0"], answer: 1 },
            { q: "Which operator is used for comparison (equal to)?", options: ["=", "==", "===", "!="], answer: 1 },
            { q: "What keyword is used for the default case in switch?", options: ["else", "default", "other", "otherwise"], answer: 1 },
            { q: "What is the output when day=6 and break is missing after case 6?\ncase 6: print(\"Saturday\");\ncase 7: print(\"Sunday\"); break;", options: ["Saturday", "Sunday", "Saturday Sunday", "Error"], answer: 2 },
            { q: "What does the ! operator do?", options: ["Adds values", "Reverses the result", "Compares values", "Assigns values"], answer: 1 },
            { q: "int x = 5; x += 3; What is x?", options: ["5", "3", "8", "53"], answer: 2 },
            { q: "Which is a valid comparison operator?", options: ["=", "!=", "<>", "=/="], answer: 1 },
            { q: "What does nextLine() read?", options: ["An integer", "A double", "A String", "A char"], answer: 2 },
            { q: "What problem occurs with nextLine() after nextInt()?", options: ["Nothing", "It reads the leftover Enter", "It crashes", "It reads twice"], answer: 1 }
        ],
        essayQuestions: [
            { q: "Write a Java program Calculator.java that reads two integers and prints: Sum, Subtraction, Multiplication, Division, and Modulus.", hint: "Use Scanner for input, arithmetic operators for calculations\n\nالـ Input اللي هيتدخل:\n5\n\n\nالـ Output المتوقع:\nEnter The Number\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50", expectedInput: "5\n", expectedOutput: "Enter The Number\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50" },
            { q: "Explain the difference between Widening and Narrowing casting with code examples.", hint: "Widening: automatic (int→double). Narrowing: manual with (int) cast" },
            { q: "Write a Java program that reads a day number (1-7) and prints the day name using switch statement.", hint: "Use switch with cases 1-7 and default for invalid input\n\nالـ Input اللي هيتدخل:\n5\n10\n\n\nالـ Output المتوقع:\nOutput here", expectedInput: "5\n10\n", expectedOutput: "Output here" },
            { q: "What is the Ternary Operator? Write an example that finds the largest of three numbers using nested ternary.", hint: "format: condition ? true : false. Nested: c > (a>b?a:b) ? c : (a>b?a:b)" },
            { q: "Explain the Scanner buffer problem with nextLine() after nextInt() and how to fix it.", hint: "nextInt() leaves \\n in buffer. Fix: add extra nextLine() to consume it\n\nالـ Input اللي هيتدخل:\n5\n10\n\n\nالـ Output المتوقع:\nOutput here", expectedInput: "5\n10\n", expectedOutput: "Output here" }
        ]
    },

    // ===== WEEK 3 =====
    {
        id: 3,
        num: "W3",
        title: "الحلقات التكرارية والمصفوفات",
        titleEn: "Loops & Arrays",
        topics: ["While Loop", "Do-While", "For Loop", "Nested Loops", "Break/Continue", "Arrays", "2D Arrays"],
        content: `
<div class="content-section">
    <h3>🔄 الحلقات التكرارية | Loops</h3>
    <p class="content-text">الحلقات بتخلينا ننفذ كود معين أكتر من مرة. بتوفر وقت وبتقلل الأخطاء وبتخلي الكود أوضح.</p>

    <h4>1️⃣ While Loop</h4>
    <p class="content-text">بتنفذ الكود طالما الشرط صحيح. لازم تتأكد إن الشرط هيبقى false في وقت ما عشان ماتحصلش infinite loop.</p>
    <div class="code-block"><code><span class="kw">int</span> i = <span class="num">0</span>;
<span class="kw">while</span> (i < <span class="num">5</span>) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(i);
    i++;
}
<span class="cmt">// Output: 0 1 2 3 4</span></code></div>

    <h4>2️⃣ Do-While Loop</h4>
    <p class="content-text">زي while بس الفرق إنها بتنفذ الكود مرة واحدة على الأقل حتى لو الشرط false من الأول!</p>
    <div class="code-block"><code><span class="kw">int</span> i = <span class="num">0</span>;
<span class="kw">do</span> {
    <span class="cls">System</span>.out.<span class="fn">println</span>(i);
    i++;
} <span class="kw">while</span> (i < <span class="num">5</span>);
<span class="cmt">// Output: 0 1 2 3 4</span></code></div>

    <h4>3️⃣ For Loop</h4>
    <p class="content-text">أفضل لما تكون عارف عدد المرات اللي عايز تكرر فيها بالظبط.</p>
    <div class="code-block"><code><span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < <span class="num">5</span>; i++) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(i);
}
<span class="cmt">// Output: 0 1 2 3 4</span>

<span class="cmt">// طباعة الأرقام الزوجية من 0 لـ 10</span>
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i <= <span class="num">10</span>; i = i + <span class="num">2</span>) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(i);  <span class="cmt">// 0 2 4 6 8 10</span>
}</code></div>

    <h4>🔁 Nested Loops (حلقات متداخلة)</h4>
    <div class="code-block"><code><span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">1</span>; i <= <span class="num">2</span>; i++) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Outer: "</span> + i);
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="num">1</span>; j <= <span class="num">3</span>; j++) {
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"  Inner: "</span> + j);
    }
}
<span class="cmt">// Inner loop runs 6 times (2 × 3)</span></code></div>

    <h3>⛔ Break & Continue</h3>
    <p class="content-text"><strong>break</strong>: بتوقف الحلقة تماماً وبتخرج منها.<br><strong>continue</strong>: بتتخطى التكرار الحالي وبتروح للتكرار اللي بعده.</p>
    <div class="code-block"><code><span class="cmt">// break - بتوقف عند i == 4</span>
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < <span class="num">10</span>; i++) {
    <span class="kw">if</span> (i == <span class="num">4</span>) <span class="kw">break</span>;
    <span class="cls">System</span>.out.<span class="fn">println</span>(i);  <span class="cmt">// 0 1 2 3</span>
}

<span class="cmt">// continue - بتتخطى i == 4</span>
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < <span class="num">10</span>; i++) {
    <span class="kw">if</span> (i == <span class="num">4</span>) <span class="kw">continue</span>;
    <span class="cls">System</span>.out.<span class="fn">println</span>(i);  <span class="cmt">// 0 1 2 3 5 6 7 8 9</span>
}</code></div>

    <h3>📦 المصفوفات | Arrays</h3>
    <p class="content-text">المصفوفات بتخزن مجموعة قيم من نفس النوع في متغير واحد. الـ index بيبدأ من 0.</p>
    <div class="code-block"><code><span class="cls">String</span>[] cars = {<span class="str">"Volvo"</span>, <span class="str">"BMW"</span>, <span class="str">"Ford"</span>, <span class="str">"Mazda"</span>};
<span class="cls">System</span>.out.<span class="fn">println</span>(cars[<span class="num">0</span>]);  <span class="cmt">// Volvo</span>

cars[<span class="num">0</span>] = <span class="str">"Opel"</span>;  <span class="cmt">// تعديل عنصر</span>
<span class="cls">System</span>.out.<span class="fn">println</span>(cars.length);  <span class="cmt">// 4</span>

<span class="cmt">// لف على المصفوفة</span>
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < cars.length; i++) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(cars[i]);
}

<span class="cmt">// For-each loop</span>
<span class="kw">for</span> (<span class="cls">String</span> car : cars) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(car);
}</code></div>

    <h4>📊 مصفوفات ثنائية الأبعاد | 2D Arrays</h4>
    <div class="code-block"><code><span class="kw">int</span>[][] myNumbers = { {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>}, {<span class="num">5</span>, <span class="num">6</span>, <span class="num">7</span>, <span class="num">8</span>} };
<span class="cls">System</span>.out.<span class="fn">println</span>(myNumbers[<span class="num">1</span>][<span class="num">2</span>]);  <span class="cmt">// 7</span>

<span class="cmt">// لف على مصفوفة 2D</span>
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < myNumbers.length; i++) {
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="num">0</span>; j < myNumbers[i].length; j++) {
        <span class="cls">System</span>.out.<span class="fn">println</span>(myNumbers[i][j]);
    }
}</code></div>
    <div class="info-box danger">
        <h5>⚠️ خطأ شائع: ArrayIndexOutOfBoundsException</h5>
        <p>لو حاولت توصل لـ index مش موجود (مثلاً arr[5] في مصفوفة طولها 4)، هيحصل Runtime Error!</p>
    </div>
</div>
        `,
        mcqQuestions: [
            { q: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "switch"], answer: 2 },
            { q: "What is the output of: for(int i=0; i<5; i++) {} System.out.println(i);", options: ["5", "4", "0", "Error"], answer: 3 },
            { q: "What does 'break' do in a loop?", options: ["Skips one iteration", "Stops the loop entirely", "Restarts the loop", "Pauses the loop"], answer: 1 },
            { q: "What does 'continue' do in a loop?", options: ["Stops the loop", "Skips current iteration", "Restarts the loop", "Breaks the program"], answer: 1 },
            { q: "Array indexes in Java start from:", options: ["1", "0", "-1", "Any number"], answer: 1 },
            { q: "How to get the length of an array 'arr'?", options: ["arr.size()", "arr.length", "arr.count()", "len(arr)"], answer: 1 },
            { q: "What is a 2D array?", options: ["An array of strings", "An array of arrays", "A circular array", "A sorted array"], answer: 1 },
            { q: "What is the output of: int[][] a = {{1,2},{3,4}}; System.out.println(a[1][0]);", options: ["1", "2", "3", "4"], answer: 2 },
            { q: "Which is the correct for-each syntax?", options: ["for(int i : arr)", "for(int i in arr)", "foreach(int i : arr)", "for(i : arr)"], answer: 0 },
            { q: "What happens with: for(int i=0; i<=arr.length; i++) arr[i]?", options: ["Works fine", "ArrayIndexOutOfBoundsException", "Returns null", "Compilation error"], answer: 1 },
            { q: "How many times does inner loop run: for(i=1;i<=3;i++) for(j=1;j<=4;j++)?", options: ["3", "4", "7", "12"], answer: 3 },
            { q: "What is the output: for(int i=0;i<5;i++){if(i%2!=0) continue; print(i);}?", options: ["0 2 4", "1 3", "0 1 2 3 4", "2 4"], answer: 0 },
            { q: "Which is valid array declaration?", options: ["int arr[6];", "int[6] arr;", "int[] arr = new int[6];", "Both B and C"], answer: 3 },
            { q: "What type of loop is best when iterations are known?", options: ["while", "do-while", "for", "switch"], answer: 2 },
            { q: "What does: int[] arr = {10, 20, 30}; print(arr[2]);", options: ["10", "20", "30", "Error"], answer: 2 },
            { q: "For-each loop works on copy of element. Original array changes?", options: ["Yes", "No", "Sometimes", "Depends on type"], answer: 1 },
            { q: "What is the correct way to reassign array values after declaration?", options: ["{1,2,3}", "new int[]{1,2,3}", "Both work", "Neither works"], answer: 1 },
            { q: "What does 'for(;;)' create?", options: ["Syntax error", "Runs once", "Infinite loop", "Does nothing"], answer: 2 },
            { q: "If for loop has semicolon after it: for(i=0;i<5;i++); print('Hello'), how many times Hello is printed?", options: ["5", "1", "0", "Error"], answer: 1 },
            { q: "What is arr.length for: int[][] arr = {{1,2,3},{4,5}};?", options: ["5", "3", "2", "Error"], answer: 2 }
        ],
        essayQuestions: [
            { q: "Write a Java program that creates an array of 10 integers, reads them from user, and calculates the sum and largest number.", hint: "Use Scanner in a loop, track sum and max variables\n\nالـ Input اللي هيتدخل:\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n\n\nالـ Output المتوقع:\nSum: 55\nMax: 10", expectedInput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n", expectedOutput: "Sum: 55\nMax: 10" },
            { q: "Explain the difference between while, do-while, and for loops with examples.", hint: "while: check first. do-while: execute first. for: known iterations." },
            { q: "Write a program that creates a 2D array and prints all elements using nested loops.", hint: "Use myNumbers.length for rows, myNumbers[i].length for columns" },
            { q: "Explain break and continue statements with code examples in both for and while loops.", hint: "break exits loop. continue skips current iteration." },
            { q: "Write a program using for-each loop to print all elements of a String array containing car names.", hint: "for(String car : cars) { System.out.println(car); }" }
        ]
    },

    // ===== WEEK 4 =====
    {
        id: 4,
        num: "W4",
        title: "الدوال (Methods) والـ Recursion",
        titleEn: "Methods, Overloading & Recursion",
        topics: ["Create Method", "Parameters", "Return Values", "Overloading", "Varargs", "Scope", "Recursion"],
        content: `
<div class="content-section">
    <h3>🔧 الدوال (Methods/Functions)</h3>
    <p class="content-text">الـ Method هي كتلة كود بتتنفذ لما نناديها. بنستخدمها عشان نعيد استخدام الكود ونخليه منظم.</p>

    <h4>📝 إنشاء واستدعاء Method</h4>
    <div class="code-block"><code><span class="kw">public class</span> <span class="cls">Test</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="fn">myMethod</span>();  <span class="cmt">// استدعاء الـ method</span>
    }
    <span class="kw">static void</span> <span class="fn">myMethod</span>() {
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"I have been executed!"</span>);
    }
}</code></div>

    <h4>📥 Parameters (معاملات)</h4>
    <div class="code-block"><code><span class="kw">static void</span> <span class="fn">myMethod</span>(<span class="cls">String</span> fname, <span class="kw">int</span> age) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(fname + <span class="str">" is "</span> + age);
}
<span class="fn">myMethod</span>(<span class="str">"Ali"</span>, <span class="num">5</span>);       <span class="cmt">// Ali is 5</span>
<span class="fn">myMethod</span>(<span class="str">"Sara"</span>, <span class="num">8</span>);      <span class="cmt">// Sara is 8</span></code></div>

    <h4>📤 Return Values (قيم الإرجاع)</h4>
    <div class="code-block"><code><span class="kw">static int</span> <span class="fn">myMethod</span>(<span class="kw">int</span> x, <span class="kw">int</span> y) {
    <span class="kw">return</span> x + y;
}
<span class="kw">int</span> z = <span class="fn">myMethod</span>(<span class="num">5</span>, <span class="num">3</span>);  <span class="cmt">// z = 8</span></code></div>

    <h4>🔄 Method Overloading (التحميل الزائد)</h4>
    <p class="content-text">ممكن يكون عندك أكتر من method بنفس الاسم بس بـ parameters مختلفة!</p>
    <div class="code-block"><code><span class="kw">static int</span> <span class="fn">plusMethod</span>(<span class="kw">int</span> x, <span class="kw">int</span> y) { <span class="kw">return</span> x + y; }
<span class="kw">static double</span> <span class="fn">plusMethod</span>(<span class="kw">double</span> x, <span class="kw">double</span> y) { <span class="kw">return</span> x + y; }

<span class="fn">plusMethod</span>(<span class="num">8</span>, <span class="num">5</span>);       <span class="cmt">// calls int version → 13</span>
<span class="fn">plusMethod</span>(<span class="num">4.3</span>, <span class="num">6.26</span>);  <span class="cmt">// calls double version → 10.56</span></code></div>

    <h4>📎 Variable Arguments (Varargs)</h4>
    <p class="content-text">ممكن تمرر عدد غير محدد من الـ arguments من نفس النوع.</p>
    <div class="code-block"><code><span class="kw">static void</span> <span class="fn">printMax</span>(<span class="kw">double</span>... numbers) {
    <span class="kw">double</span> result = numbers[<span class="num">0</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">1</span>; i < numbers.length; i++)
        <span class="kw">if</span> (numbers[i] > result) result = numbers[i];
    <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Max: "</span> + result);
}
<span class="fn">printMax</span>(<span class="num">34</span>, <span class="num">3</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">56.5</span>);  <span class="cmt">// Max: 56.5</span></code></div>
    <div class="info-box warning">
        <h5>⚠️ قواعد Varargs</h5>
        <p>❌ ماينفعش يكون عندك أكتر من varargs واحد: void test(int... a, int... b)<br>
        ❌ لازم يكون آخر parameter: void display(int... marks, String name) ← غلط!</p>
    </div>

    <h3>🏠 النطاق | Scope</h3>
    <p class="content-text">المتغيرات بتكون متاحة بس جوه الـ block (الأقواس {}) اللي اتعرفت فيه. ده اسمه Block Scope.</p>

    <h3>🔁 التكرار الذاتي | Recursion</h3>
    <p class="content-text">الـ Recursion هو إن الـ method تنادي نفسها! لازم يكون فيه شرط إيقاف (Base Case) عشان ماتحصلش infinite recursion.</p>
    <div class="code-block"><code><span class="kw">public static int</span> <span class="fn">sum</span>(<span class="kw">int</span> k) {
    <span class="kw">if</span> (k > <span class="num">0</span>) {
        <span class="kw">return</span> k + <span class="fn">sum</span>(k - <span class="num">1</span>);  <span class="cmt">// recursive call</span>
    } <span class="kw">else</span> {
        <span class="kw">return</span> <span class="num">0</span>;  <span class="cmt">// base case</span>
    }
}
<span class="fn">sum</span>(<span class="num">10</span>);  <span class="cmt">// 10+9+8+7+6+5+4+3+2+1+0 = 55</span></code></div>
    <div class="info-box">
        <h5>💡 فهم Pass by Value</h5>
        <p>في الجافا، لما تمرر primitive variable لـ method، الـ method بتاخد نسخة من القيمة مش المتغير الأصلي. يعني التغيير جوه الـ method مابيأثرش على المتغير الأصلي.</p>
    </div>
</div>
        `,
        mcqQuestions: [
            { q: "What is a method in Java?", options: ["A variable", "A block of code that runs when called", "A class", "A loop"], answer: 1 },
            { q: "What keyword indicates a method returns nothing?", options: ["null", "void", "empty", "none"], answer: 1 },
            { q: "What is Method Overloading?", options: ["Same name, same parameters", "Same name, different parameters", "Different name, same parameters", "None"], answer: 1 },
            { q: "What is recursion?", options: ["A loop", "A method calling itself", "Method overloading", "An array"], answer: 1 },
            { q: "What is a base case in recursion?", options: ["The first call", "The stopping condition", "The recursive call", "The return type"], answer: 1 },
            { q: "What does 'return' do in a method?", options: ["Prints output", "Stops the method and returns a value", "Creates a variable", "Loops again"], answer: 1 },
            { q: "static void myMethod(String name, int age) - how many parameters?", options: ["0", "1", "2", "3"], answer: 2 },
            { q: "What is varargs syntax?", options: ["int[] args", "int... args", "int args...", "args int..."], answer: 1 },
            { q: "Can you have multiple varargs in one method?", options: ["Yes", "No", "Only two", "Only with different types"], answer: 1 },
            { q: "Where must varargs parameter be placed?", options: ["First", "Middle", "Last", "Anywhere"], answer: 2 },
            { q: "What is 'scope' in Java?", options: ["Variable type", "Region where variable is accessible", "Method name", "Class type"], answer: 1 },
            { q: "What happens when passing a primitive to a method?", options: ["Original changes", "A copy is passed", "Reference is passed", "Error"], answer: 1 },
            { q: "What is the output: int sum(int k){if(k>0) return k+sum(k-1); else return 0;} sum(5);", options: ["5", "10", "15", "20"], answer: 2 },
            { q: "Which access modifier means accessible from anywhere?", options: ["private", "protected", "public", "default"], answer: 2 },
            { q: "Which access modifier means accessible only inside the same class?", options: ["public", "protected", "private", "default"], answer: 2 },
            { q: "What does 'static' mean for a method?", options: ["Can be overridden", "Belongs to class not object", "Cannot be called", "Is abstract"], answer: 1 },
            { q: "int plusMethod(int x, int y) and double plusMethod(double x, double y) is:", options: ["Overriding", "Overloading", "Error", "Inheritance"], answer: 1 },
            { q: "What is 'final' on a method?", options: ["Method can be overloaded", "Method cannot be overridden", "Method is private", "Method is static"], answer: 1 },
            { q: "What is block scope?", options: ["Variables accessible everywhere", "Variables accessible only in {}", "Variables accessible in class", "Variables accessible in file"], answer: 1 },
            { q: "Methods are used to:", options: ["Store data", "Reuse code", "Create arrays", "Define variables"], answer: 1 }
        ],
        essayQuestions: [
            { q: "Write a Student Grades System: array of 5 grades, methods for calculateAverage(), findMax(), and printGrades().", hint: "Create methods that take array parameter. Use loops inside each method." },
            { q: "Write a recursive method called power(base, exponent) that calculates base^exponent.", hint: "Base case: exponent==0 return 1. Recursive: return base * power(base, exponent-1)" },
            { q: "Explain method overloading with an example of a method 'add' that works with both int and double parameters.", hint: "Two methods: int add(int,int) and double add(double,double)" },
            { q: "What is variable scope? Give examples of method scope and block scope.", hint: "Variables declared in {} are accessible only within that block" },
            { q: "Explain the difference between 'static' and 'private' methods with examples.", hint: "static: belongs to class, called without object. private: only accessible in same class." }
        ]
    },

    // ===== WEEK 5 =====
    {
        id: 5,
        num: "W5",
        title: "مفاهيم البرمجة الكائنية OOP",
        titleEn: "Object-Oriented Programming Concepts",
        topics: ["Class", "Object", "Inheritance", "Polymorphism", "Encapsulation", "Abstraction", "Interface"],
        content: `
<div class="content-section">
    <h3>🎯 البرمجة الكائنية | OOP Concepts</h3>
    <p class="content-text">OOP هو أسلوب برمجة بيعتمد على مفهوم الـ Objects اللي بتحتوي على بيانات (Fields) وسلوكيات (Methods). بيخلي الكود منظم وقابل لإعادة الاستخدام وسهل الصيانة.</p>

    <h4>1️⃣ الكلاس | Class</h4>
    <p class="content-text">الكلاس هو قالب (Blueprint) لإنشاء الـ Objects. بيحدد الخصائص (Properties) والسلوكيات (Methods).</p>
    <p class="content-text en">Think of it like a Car blueprint: it defines what properties (brand, speed) and behaviors (drive, brake) a car has.</p>

    <h4>2️⃣ الكائن | Object</h4>
    <p class="content-text">الـ Object هو نسخة (Instance) من الكلاس. بنعمله باستخدام كلمة <code>new</code>.</p>
    <div class="code-block"><code><span class="kw">public class</span> <span class="cls">Main</span> {
    <span class="kw">int</span> x = <span class="num">5</span>;
    <span class="cls">String</span> fname = <span class="str">"John"</span>;
    <span class="kw">int</span> age = <span class="num">24</span>;

    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="cls">Main</span> myObj1 = <span class="kw">new</span> <span class="cls">Main</span>();
        <span class="cls">Main</span> myObj2 = <span class="kw">new</span> <span class="cls">Main</span>();
        myObj2.x = <span class="num">25</span>;
        <span class="cls">System</span>.out.<span class="fn">println</span>(myObj1.x);  <span class="cmt">// 5</span>
        <span class="cls">System</span>.out.<span class="fn">println</span>(myObj2.x);  <span class="cmt">// 25</span>
    }
}</code></div>

    <h4>3️⃣ الوراثة | Inheritance</h4>
    <p class="content-text">الوراثة بتخلي كلاس جديد (Subclass) يرث خصائص وسلوكيات من كلاس موجود (Superclass). بنستخدم كلمة <code>extends</code>.</p>
    <div class="info-box success">
        <h5>✅ فوايد الوراثة</h5>
        <p>✅ إعادة استخدام الكود (Code Reusability)<br>
        ✅ Method Overriding: الكلاس الابن يقدر يعيد تعريف method الأب<br>
        ✅ Extensibility: إضافة وظائف جديدة بدون تعديل الكلاس الأصلي</p>
    </div>

    <h4>4️⃣ تعدد الأشكال | Polymorphism</h4>
    <p class="content-text">كلمة Polymorphism معناها "أشكال كتير". فيها نوعين:</p>
    <p class="content-text"><strong>Compile-time (Method Overloading)</strong>: نفس اسم الـ method بس بـ parameters مختلفة. القرار بيتم وقت الـ Compile.</p>
    <p class="content-text"><strong>Runtime (Method Overriding)</strong>: الكلاس الابن بيعيد تعريف method الأب. القرار بيتم وقت التشغيل.</p>

    <h4>5️⃣ التغليف | Encapsulation</h4>
    <p class="content-text">التغليف هو إخفاء البيانات وحمايتها. بنخلي المتغيرات <code>private</code> ونوصلها عن طريق <code>getter</code> و <code>setter</code> methods.</p>
    <div class="code-block"><code><span class="kw">public class</span> <span class="cls">Person</span> {
    <span class="kw">private</span> <span class="cls">String</span> name;  <span class="cmt">// private = مخفي</span>

    <span class="kw">public</span> <span class="cls">String</span> <span class="fn">getName</span>() { <span class="kw">return</span> name; }         <span class="cmt">// Getter</span>
    <span class="kw">public void</span> <span class="fn">setName</span>(<span class="cls">String</span> n) { name = n; }  <span class="cmt">// Setter</span>
}</code></div>

    <h4>6️⃣ التجريد | Abstraction</h4>
    <p class="content-text">التجريد هو إخفاء التفاصيل المعقدة وإظهار الوظائف الأساسية بس. بنستخدم <code>abstract class</code> أو <code>interface</code>.</p>
    <div class="info-box">
        <h5>💡 الفرق بين Abstract Class و Interface</h5>
        <p>🔹 Abstract Class: ممكن يكون فيه abstract و regular methods. الكلاس يقدر يرث من abstract class واحد بس (extends).<br>
        🔹 Interface: كل الـ methods بتكون abstract بشكل افتراضي. الكلاس يقدر ينفذ أكتر من interface (implements).<br>
        🔹 مش ممكن تعمل object من abstract class مباشرة!</p>
    </div>
</div>
        `,
        mcqQuestions: [
            { q: "What is a class in Java?", options: ["An instance of an object", "A blueprint for objects", "A function", "A variable"], answer: 1 },
            { q: "Which keyword is used to create an object?", options: ["class", "new", "static", "void"], answer: 1 },
            { q: "What is an object?", options: ["A function", "An instance of a class", "A loop", "A condition"], answer: 1 },
            { q: "Which keyword is used for inheritance?", options: ["implements", "extends", "inherits", "super"], answer: 1 },
            { q: "Method Overloading is:", options: ["Runtime Polymorphism", "Compile-time Polymorphism", "Encapsulation", "Abstraction"], answer: 1 },
            { q: "Method Overriding is:", options: ["Compile-time Polymorphism", "Runtime Polymorphism", "Encapsulation", "Abstraction"], answer: 1 },
            { q: "Encapsulation means:", options: ["Hiding data", "Creating objects", "Using loops", "Method overloading"], answer: 0 },
            { q: "Which access modifier hides data from other classes?", options: ["public", "protected", "private", "default"], answer: 2 },
            { q: "Can you create an object from an abstract class?", options: ["Yes", "No", "Sometimes", "Only with static"], answer: 1 },
            { q: "A class can extend how many abstract classes?", options: ["0", "1", "2", "Unlimited"], answer: 1 },
            { q: "A class can implement how many interfaces?", options: ["0", "1", "2", "Multiple"], answer: 3 },
            { q: "What is a getter method?", options: ["Sets a value", "Returns a private variable's value", "Creates an object", "Deletes a variable"], answer: 1 },
            { q: "What is a setter method?", options: ["Returns a value", "Sets a private variable's value", "Creates an object", "Prints output"], answer: 1 },
            { q: "In interface, methods are by default:", options: ["private", "protected", "abstract", "static"], answer: 2 },
            { q: "Interface variables are:", options: ["private", "protected", "public static final", "default"], answer: 2 },
            { q: "Which keyword is used to implement an interface?", options: ["extends", "implements", "inherits", "uses"], answer: 1 },
            { q: "Abstraction means:", options: ["Showing all details", "Hiding complex details, showing essential features", "Creating objects", "Using arrays"], answer: 1 },
            { q: "Which is true about constructors in interfaces?", options: ["Allowed", "Not allowed", "Optional", "Required"], answer: 1 },
            { q: "OOP stands for:", options: ["Object Oriented Programming", "Object Open Platform", "Open Object Programming", "Oriented Object Protocol"], answer: 0 },
            { q: "Which OOP concept allows code reusability through parent-child relationships?", options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"], answer: 2 }
        ],
        essayQuestions: [
            { q: "Create class Car with brand and speed. Create method increaseSpeed(int value). Create object, set values, increase speed and print.", hint: "Class with attributes, method that adds value to speed" },
            { q: "Create class Person with name and display() method. Create Student class that inherits from Person with grade. Create object and test.", hint: "Student extends Person. Access inherited display() and own grade" },
            { q: "Explain the four pillars of OOP (Encapsulation, Inheritance, Polymorphism, Abstraction) with simple examples.", hint: "Encapsulation=data hiding, Inheritance=extends, Polymorphism=overloading/overriding, Abstraction=abstract class" },
            { q: "Create abstract class Animal with abstract method makeSound(). Create Dog class that implements it. Test in main.", hint: "abstract class Animal { abstract void makeSound(); } class Dog extends Animal { void makeSound() { print(Bark); } }" },
            { q: "Create class Calculator with overloaded add method: one for two ints, one for three ints. Test both.", hint: "int add(int a, int b) and int add(int a, int b, int c)" }
        ]
    },

    // ===== WEEK 6 (Revision) =====
    {
        id: 6,
        num: "W6",
        title: "مراجعة شاملة (Midterm Revision)",
        titleEn: "Comprehensive Revision",
        topics: ["MCQ Review", "True/False", "Code Output", "Programs", "All Topics"],
        content: `
<div class="content-section">
    <h3>📝 مراجعة شاملة على كل اللي فات</h3>
    <p class="content-text">الأسبوع ده بيغطي مراجعة على كل المواضيع من Week 1 لـ Week 5. هنراجع الأسئلة المهمة اللي جت في المراجعة.</p>

    <h4>✅ أسئلة True/False المهمة</h4>
    <div class="info-box success">
        <h5>تأكد إنك عارف الإجابات دي:</h5>
        <p>✅ Java is case-sensitive → <strong>True</strong><br>
        ❌ = is used for comparison → <strong>False</strong> (= للتعيين، == للمقارنة)<br>
        ✅ switch can replace multiple if statements → <strong>True</strong><br>
        ❌ Array index starts from 1 → <strong>False</strong> (بيبدأ من 0)<br>
        ✅ break stops the loop → <strong>True</strong><br>
        ❌ Methods must always return a value → <strong>False</strong> (void موجود)<br>
        ✅ An object is an instance of a class → <strong>True</strong><br>
        ✅ Encapsulation hides data → <strong>True</strong><br>
        ❌ Abstract class can be instantiated → <strong>False</strong><br>
        ✅ Overriding is Runtime Polymorphism → <strong>True</strong></p>
    </div>

    <h4>💻 أمثلة Code Output مهمة</h4>
    <div class="code-block"><code><span class="cmt">// Q: What is the output?</span>
<span class="kw">int</span> i = <span class="num">0</span>;
<span class="kw">while</span>(i < <span class="num">5</span>) {
    <span class="kw">if</span>(i % <span class="num">2</span> != <span class="num">0</span>) { i++; <span class="kw">continue</span>; }
    <span class="cls">System</span>.out.<span class="fn">print</span>(i + <span class="str">" "</span>);
    i++;
}
<span class="cmt">// Output: 0 2 4</span></code></div>

    <h4>📝 برامج مهمة للمراجعة</h4>
    <p class="content-text"><strong>1. جدول الضرب:</strong> اقرأ رقم واطبع جدول ضربه</p>
    <div class="code-block"><code><span class="kw">import</span> java.util.<span class="cls">Scanner</span>;
<span class="kw">public class</span> <span class="cls">MultiplicationTable</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="cls">Scanner</span> myObj = <span class="kw">new</span> <span class="cls">Scanner</span>(<span class="cls">System</span>.in);
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Enter The Number"</span>);
        <span class="kw">int</span> num = myObj.<span class="fn">nextInt</span>();
        <span class="kw">for</span>(<span class="kw">int</span> i = <span class="num">1</span>; i <= <span class="num">10</span>; i++) {
            <span class="cls">System</span>.out.<span class="fn">printf</span>(<span class="str">"%d * %d = %d\\n"</span>, num, i, num * i);
        }
    }
}</code></div>

    <p class="content-text"><strong>2. فحص الأعداد الأولية:</strong></p>
    <div class="code-block"><code><span class="kw">boolean</span> isPrime = <span class="kw">true</span>;
<span class="kw">for</span>(<span class="kw">int</span> i = <span class="num">2</span>; i < num; i++) {
    <span class="kw">if</span>(num % i == <span class="num">0</span>) {
        isPrime = <span class="kw">false</span>;
        <span class="kw">break</span>;
    }
}
<span class="kw">if</span>(isPrime) <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Prime"</span>);
<span class="kw">else</span> <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Not Prime"</span>);</code></div>

    <p class="content-text"><strong>3. أكبر عنصر في مصفوفة:</strong></p>
    <div class="code-block"><code><span class="kw">public static int</span> <span class="fn">larg</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> max = arr[<span class="num">0</span>];
    <span class="kw">for</span>(<span class="kw">int</span> i = <span class="num">1</span>; i < arr.length; i++) {
        <span class="kw">if</span>(arr[i] > max) max = arr[i];
    }
    <span class="kw">return</span> max;
}</code></div>
</div>
        `,
        mcqQuestions: [
            { q: "Which data type stores decimal numbers?", options: ["int", "double", "char", "boolean"], answer: 1 },
            { q: "Which symbol is used for comments in Java?", options: ["//", "##", "**", "@@"], answer: 0 },
            { q: "Which operator is used for comparison?", options: ["=", "==", "!=", "Both B and C"], answer: 3 },
            { q: "Which object is used for user input?", options: ["Scanf", "Scanner", "Cin", "Input"], answer: 1 },
            { q: "Which loop executes at least once?", options: ["Do-while", "for", "while", "switch"], answer: 0 },
            { q: "What is correct array definition?", options: ["int arr[6];", "int[6] arr;", "int[] arr = new int[size];", "Both B and C"], answer: 3 },
            { q: "Which keyword creates an object?", options: ["class", "new", "static", "void"], answer: 1 },
            { q: "What is an object?", options: ["An instance of a class", "A function", "A loop", "A condition"], answer: 0 },
            { q: "Method Overloading is?", options: ["Runtime Polymorphism", "Regular method", "Static method", "Compile-time Polymorphism"], answer: 3 },
            { q: "Is Java case-sensitive?", options: ["Yes", "No", "Sometimes", "Only for classes"], answer: 0 },
            { q: "= is used for?", options: ["Comparison", "Assignment", "Both", "Neither"], answer: 1 },
            { q: "Array index starts from?", options: ["1", "0", "-1", "Depends"], answer: 1 },
            { q: "Methods must always return a value?", options: ["True", "False"], answer: 1 },
            { q: "Abstract class can be instantiated?", options: ["True", "False"], answer: 1 },
            { q: "Overriding is?", options: ["Compile-time Polymorphism", "Runtime Polymorphism", "Encapsulation", "Abstraction"], answer: 1 },
            { q: "What is the output: int x=5; switch(x){case 5: print('A'); case 6: print('B'); break;}", options: ["A", "AB", "B", "Error"], answer: 1 },
            { q: "What is the output: for(int i=0;i<5;i++){if(i==3) break; print(i);}", options: ["0 1 2 3", "0 1 2", "0 1 2 3 4", "3"], answer: 1 },
            { q: "Which is true about encapsulation?", options: ["Uses public variables", "Hides data using private", "Doesn't use methods", "Only for arrays"], answer: 1 },
            { q: "break stops the loop?", options: ["True", "False"], answer: 0 },
            { q: "switch can replace multiple if statements?", options: ["True", "False"], answer: 0 }
        ],
        essayQuestions: [
            { q: "Write a Java program that takes an integer from user and generates its multiplication table (1 to 10).", hint: "Use Scanner for input, for loop from 1 to 10, printf for formatting\n\nالـ Input اللي هيتدخل:\n5\n\n\nالـ Output المتوقع:\nEnter The Number\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50", expectedInput: "5\n", expectedOutput: "Enter The Number\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50" },
            { q: "Write a program to check if a number is prime or not.", hint: "Loop from 2 to num-1, check if num%i==0, use boolean flag" },
            { q: "Write a function that takes an array and returns the largest element.", hint: "Initialize max=arr[0], loop through array comparing each element" },
            { q: "Write a program that solves the algebra equation ax + b = 0 (read a and b from user, print x).", hint: "x = -b/a, use double for precision\n\nالـ Input اللي هيتدخل:\n2\n-4\n\n\nالـ Output المتوقع:\n2.0", expectedInput: "2\n-4\n", expectedOutput: "2.0" },
            { q: "Write a Java program that prints numbers from 1 to 15, skipping numbers divisible by 3 using continue.", hint: "for loop 1 to 15, if(i%3==0) continue, else print" }
        ]
    },

    // ===== WEEK 7 =====
    {
        id: 7,
        num: "W7",
        title: "الـ Constructors والكلمة المفتاحية static",
        titleEn: "Constructors & Static Keyword",
        topics: ["Default Constructor", "No-Args Constructor", "Parameterized Constructor", "Constructor Overloading", "static"],
        content: `
<div class="content-section">
    <h3>🏗️ الـ Constructors</h3>
    <p class="content-text">الـ Constructor هو method خاصة بتتنفذ تلقائياً لما بنعمل object جديد. بنستخدمه عشان نحط قيم ابتدائية للـ object.</p>
    <div class="info-box">
        <h5>💡 قواعد مهمة</h5>
        <p>✅ اسم الـ Constructor لازم يكون نفس اسم الكلاس<br>
        ✅ مالوش return type (حتى مش void!)<br>
        ✅ بيتنادى تلقائياً لما بنعمل object بـ new</p>
    </div>

    <h4>1️⃣ Default Constructor</h4>
    <p class="content-text">لو مكتبتش أي constructor، الجافا بتوفرلك واحد default بيحط قيم افتراضية (0 للأرقام، null للـ Strings).</p>

    <h4>2️⃣ No-Args Constructor</h4>
    <div class="code-block"><code><span class="kw">public class</span> <span class="cls">Main</span> {
    <span class="kw">int</span> x;
    <span class="kw">public</span> <span class="fn">Main</span>() {
        x = <span class="num">5</span>;  <span class="cmt">// قيمة ابتدائية</span>
    }
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="cls">Main</span> myObj = <span class="kw">new</span> <span class="cls">Main</span>();
        <span class="cls">System</span>.out.<span class="fn">println</span>(myObj.x);  <span class="cmt">// 5</span>
    }
}</code></div>

    <h4>3️⃣ Parameterized Constructor</h4>
    <div class="code-block"><code><span class="kw">public class</span> <span class="cls">Main</span> {
    <span class="kw">int</span> modelYear;
    <span class="cls">String</span> modelName;

    <span class="kw">public</span> <span class="fn">Main</span>(<span class="kw">int</span> year, <span class="cls">String</span> name) {
        modelYear = year;
        modelName = name;
    }
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="cls">Main</span> myCar = <span class="kw">new</span> <span class="cls">Main</span>(<span class="num">2020</span>, <span class="str">"BMW"</span>);
        <span class="cls">System</span>.out.<span class="fn">println</span>(myCar.modelYear + <span class="str">" "</span> + myCar.modelName);
        <span class="cmt">// Output: 2020 BMW</span>
    }
}</code></div>

    <h4>4️⃣ Constructor Overloading</h4>
    <p class="content-text">زي method overloading - ممكن يكون عندك أكتر من constructor بـ parameters مختلفة.</p>
    <div class="code-block"><code><span class="kw">public class</span> <span class="cls">Main</span> {
    <span class="kw">int</span> modelYear = <span class="num">2024</span>;
    <span class="cls">String</span> modelName;
    
    <span class="kw">public</span> <span class="fn">Main</span>(<span class="cls">String</span> name) { modelName = name; }
    <span class="kw">public</span> <span class="fn">Main</span>(<span class="kw">int</span> year, <span class="cls">String</span> name) { modelYear = year; modelName = name; }

    <span class="cls">Main</span> car1 = <span class="kw">new</span> <span class="cls">Main</span>(<span class="str">"Mercedes"</span>);       <span class="cmt">// 2024 Mercedes</span>
    <span class="cls">Main</span> car2 = <span class="kw">new</span> <span class="cls">Main</span>(<span class="num">2020</span>, <span class="str">"BMW"</span>);    <span class="cmt">// 2020 BMW</span>
}</code></div>

    <h3>⚡ الكلمة المفتاحية static</h3>
    <p class="content-text">static بتعني إن المتغير أو الـ method بينتمي للكلاس نفسه مش للـ object. المتغير الـ static مشترك بين كل الـ objects.</p>
    <div class="code-block"><code><span class="cmt">// بدون static - كل object ليه نسخته</span>
<span class="kw">int</span> count = <span class="num">0</span>;  <span class="cmt">// كل object → count = 1</span>

<span class="cmt">// مع static - مشترك بين كل الـ objects</span>
<span class="kw">static int</span> count = <span class="num">0</span>;  <span class="cmt">// أول object → 1, تاني → 2, تالت → 3</span></code></div>
    <div class="info-box">
        <h5>💡 الفرق بين Constructor و Method</h5>
        <p>🔹 Constructor: لتهيئة الـ object, مالوش return type, بيتنادى implicitly, اسمه نفس اسم الكلاس<br>
        🔹 Method: لعرض سلوك الـ object, ليه return type, بيتنادى explicitly, اسمه أي حاجة</p>
    </div>
</div>
        `,
        mcqQuestions: [
            { q: "What is a constructor?", options: ["A regular method", "A special method to initialize objects", "A loop", "A variable"], answer: 1 },
            { q: "Constructor name must:", options: ["Start with lowercase", "Match the class name", "Be any name", "Start with 'const'"], answer: 1 },
            { q: "Can a constructor have a return type?", options: ["Yes, void", "Yes, any type", "No", "Only int"], answer: 2 },
            { q: "When is a constructor called?", options: ["When method is called", "When object is created", "When class is declared", "Manually"], answer: 1 },
            { q: "What is a default constructor?", options: ["A constructor you write", "Java-provided when no constructor exists", "A constructor with parameters", "A static method"], answer: 1 },
            { q: "Default int value from default constructor?", options: ["null", "0", "1", "-1"], answer: 1 },
            { q: "What is a parameterized constructor?", options: ["No arguments", "With arguments", "Without body", "Static constructor"], answer: 1 },
            { q: "Constructor overloading means:", options: ["One constructor", "Multiple constructors with different parameters", "No constructor", "Inheriting constructors"], answer: 1 },
            { q: "What does 'static' keyword mean?", options: ["Belongs to object", "Belongs to class", "Cannot change", "Is private"], answer: 1 },
            { q: "Static variable is shared between:", options: ["Only one object", "All objects of the class", "No objects", "Only subclasses"], answer: 1 },
            { q: "int count=0 in constructor, 3 objects created. Each object's count?", options: ["1, 1, 1", "1, 2, 3", "0, 0, 0", "3, 3, 3"], answer: 0 },
            { q: "static int count=0 in constructor with count++, 3 objects. Last count?", options: ["1", "2", "3", "0"], answer: 2 },
            { q: "Can static be used with variables?", options: ["Yes", "No"], answer: 0 },
            { q: "Can static be used with methods?", options: ["Yes", "No"], answer: 0 },
            { q: "A constructor can have void return type?", options: ["Yes", "No"], answer: 1 },
            { q: "If no constructor is written, Java provides:", options: ["Nothing", "Default constructor", "Error", "Main method"], answer: 1 },
            { q: "Main() { x = 5; } Main(int y) { x = y; } - this is:", options: ["Overriding", "Overloading", "Error", "Recursion"], answer: 1 },
            { q: "Which is true about constructor?", options: ["Has return type", "Called explicitly", "Name matches class", "Can be static"], answer: 2 },
            { q: "Static method can be called without:", options: ["Class name", "Object", "Parameters", "Import"], answer: 1 },
            { q: "What is constructor chaining?", options: ["Multiple constructors", "Calling one constructor from another", "Inheriting constructors", "Static constructors"], answer: 1 }
        ],
        essayQuestions: [
            { q: "Create class Box with width and height. Write a no-args constructor (sets defaults) and parameterized constructor. Print values for both.", hint: "Box() { width=1; height=1; } Box(int w, int h) { width=w; height=h; }" },
            { q: "Explain the three types of constructors with code examples.", hint: "Default (Java-provided), No-Args (you write, no params), Parameterized (with params)" },
            { q: "Explain the difference between static and instance variables with an example showing counter behavior.", hint: "Instance: each object gets copy. Static: shared, counter increments across objects" },
            { q: "What is the difference between a Constructor and a Method? List at least 4 differences.", hint: "Name, return type, invocation, compiler provision" },
            { q: "Write a Car class with brand and year. Use constructor overloading: one that takes only brand (default year=2024), one that takes both.", hint: "Two constructors with different parameter lists" }
        ]
    },

    // ===== WEEK 8 =====
    {
        id: 8,
        num: "W8",
        title: "this Keyword و ArrayList",
        titleEn: "this Keyword & ArrayList",
        topics: ["this Keyword", "Encapsulation", "ArrayList", "add/get/set/remove", "Wrapper Classes", "Collections.sort", "List Interface"],
        content: `
<div class="content-section">
    <h3>🔑 كلمة this</h3>
    <p class="content-text"><code>this</code> بتشير للـ object الحالي. بنستخدمها في 3 حالات:</p>

    <h4>1️⃣ للتفريق بين المتغيرات</h4>
    <div class="code-block"><code><span class="kw">class</span> <span class="cls">Student</span> {
    <span class="kw">int</span> age;
    <span class="fn">Student</span>(<span class="kw">int</span> age) {
        <span class="kw">this</span>.age = age;  <span class="cmt">// this.age = instance variable</span>
    }                    <span class="cmt">// age = parameter</span>
}</code></div>

    <h4>2️⃣ لاستدعاء method في نفس الـ object</h4>
    <div class="code-block"><code><span class="kw">void</span> <span class="fn">display</span>() {
    <span class="kw">this</span>.<span class="fn">show</span>();  <span class="cmt">// calling method of same object</span>
}</code></div>

    <h4>3️⃣ لاستدعاء constructor آخر (Constructor Chaining)</h4>
    <div class="code-block"><code><span class="fn">Student</span>() {
    <span class="kw">this</span>(<span class="str">"Unknown"</span>);  <span class="cmt">// calls parameterized constructor</span>
}
<span class="fn">Student</span>(<span class="cls">String</span> name) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(name);
}</code></div>

    <h3>📋 ArrayList</h3>
    <p class="content-text">ArrayList هو مصفوفة ديناميكية حجمها بيتغير. بخلاف الـ Array العادي، ممكن تضيف وتشيل عناصر بسهولة.</p>
    <div class="code-block"><code><span class="kw">import</span> java.util.<span class="cls">ArrayList</span>;

<span class="cls">ArrayList</span>&lt;<span class="cls">String</span>&gt; cars = <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;<span class="cls">String</span>&gt;();

cars.<span class="fn">add</span>(<span class="str">"Volvo"</span>);          <span class="cmt">// إضافة</span>
cars.<span class="fn">get</span>(<span class="num">0</span>);                <span class="cmt">// الوصول → "Volvo"</span>
cars.<span class="fn">set</span>(<span class="num">0</span>, <span class="str">"Opel"</span>);       <span class="cmt">// تعديل</span>
cars.<span class="fn">remove</span>(<span class="num">0</span>);             <span class="cmt">// حذف بالـ index</span>
cars.<span class="fn">remove</span>(<span class="str">"Mazda"</span>);       <span class="cmt">// حذف بالقيمة</span>
cars.<span class="fn">clear</span>();                <span class="cmt">// حذف الكل</span>
cars.<span class="fn">size</span>();                 <span class="cmt">// الحجم</span></code></div>

    <h4>🔄 Wrapper Classes</h4>
    <p class="content-text">ArrayList ما بتشتغلش مع أنواع البيانات الأساسية (primitive). لازم تستخدم Wrapper Classes:</p>
    <table class="content-table">
        <tr><th>Primitive</th><th>Wrapper Class</th></tr>
        <tr><td>int</td><td>Integer</td></tr>
        <tr><td>double</td><td>Double</td></tr>
        <tr><td>boolean</td><td>Boolean</td></tr>
        <tr><td>char</td><td>Character</td></tr>
    </table>
    <div class="code-block"><code><span class="cmt">// ❌ Invalid: ArrayList&lt;int&gt;</span>
<span class="cmt">// ✅ Valid:</span>
<span class="cls">ArrayList</span>&lt;<span class="cls">Integer</span>&gt; myNumbers = <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;<span class="cls">Integer</span>&gt;();</code></div>

    <h4>📊 ترتيب ArrayList</h4>
    <div class="code-block"><code><span class="kw">import</span> java.util.<span class="cls">Collections</span>;
<span class="cls">Collections</span>.<span class="fn">sort</span>(cars);  <span class="cmt">// ترتيب أبجدي أو رقمي</span></code></div>

    <h4>📜 List Interface</h4>
    <p class="content-text">List هو interface بيوسع Collection. العناصر مرتبة وممكن تتكرر. بيضيف methods زي get(), set(), add(index, element).</p>
    <div class="code-block"><code><span class="cls">List</span>&lt;<span class="cls">Integer</span>&gt; list = <span class="kw">new</span> <span class="cls">ArrayList</span>&lt;<span class="cls">Integer</span>&gt;();
list.<span class="fn">add</span>(<span class="num">0</span>, <span class="num">10</span>);  <span class="cmt">// إضافة في مكان معين</span>
list.<span class="fn">get</span>(<span class="num">1</span>);       <span class="cmt">// الوصول بالـ index</span>
list.<span class="fn">set</span>(<span class="num">0</span>, <span class="num">50</span>);  <span class="cmt">// تعديل</span></code></div>
</div>
        `,
        mcqQuestions: [
            { q: "What does 'this' keyword refer to?", options: ["The class", "The current object", "The parent class", "A static member"], answer: 1 },
            { q: "When is 'this' used to distinguish variables?", options: ["Always", "When parameter has same name as class variable", "Never", "In static methods"], answer: 1 },
            { q: "ArrayList is in which package?", options: ["java.io", "java.util", "java.lang", "java.net"], answer: 1 },
            { q: "How to add an element to ArrayList?", options: ["add()", "push()", "insert()", "append()"], answer: 0 },
            { q: "How to get an element from ArrayList?", options: ["get(index)", "arr[index]", "fetch(index)", "take(index)"], answer: 0 },
            { q: "How to modify an element in ArrayList?", options: ["set(index, value)", "change(index, value)", "arr[index] = value", "update(index, value)"], answer: 0 },
            { q: "How to get ArrayList size?", options: [".length", ".size()", ".count()", ".getSize()"], answer: 1 },
            { q: "Which is the correct ArrayList declaration for integers?", options: ["ArrayList<int>", "ArrayList<Integer>", "ArrayList(int)", "ArrayList[Integer]"], answer: 1 },
            { q: "What is the Wrapper class for int?", options: ["Int", "integer", "Integer", "INT"], answer: 2 },
            { q: "Which class is used to sort ArrayList?", options: ["Sort", "Arrays", "Collections", "Sorting"], answer: 2 },
            { q: "What does this() do in a constructor?", options: ["Calls parent constructor", "Calls another constructor in same class", "Returns this object", "Creates new object"], answer: 1 },
            { q: "ArrayList elements are:", options: ["Primitive types", "Objects", "Both", "Neither"], answer: 1 },
            { q: "How to remove all elements from ArrayList?", options: ["removeAll()", "clear()", "delete()", "empty()"], answer: 1 },
            { q: "What is the Wrapper class for char?", options: ["Char", "Character", "CharWrapper", "Chr"], answer: 1 },
            { q: "List interface allows duplicate elements?", options: ["Yes", "No"], answer: 0 },
            { q: "How to remove element by value from ArrayList?", options: ["remove(value)", "delete(value)", "erase(value)", "drop(value)"], answer: 0 },
            { q: "What does cars.add(1, \"BMW\") do?", options: ["Adds BMW at index 1", "Adds BMW at end", "Replaces index 1", "Error"], answer: 0 },
            { q: "Difference between Array and ArrayList?", options: ["Array is dynamic", "ArrayList is resizable", "Both are same", "Array uses objects only"], answer: 1 },
            { q: "Which is valid? List<Integer> list = new ArrayList<Integer>();", options: ["Yes, using interface reference", "No, type mismatch", "Only with casting", "Sometimes"], answer: 0 },
            { q: "What does Collections.sort() do?", options: ["Reverses list", "Sorts alphabetically/numerically", "Removes duplicates", "Adds elements"], answer: 1 }
        ],
        essayQuestions: [
            { q: "Create class Student with name and age. Use 'this' keyword in the constructor to initialize variables. Create an object and print values.", hint: "this.name = name; this.age = age; in constructor" },
            { q: "Create an ArrayList of integers, add 5 numbers, print all using a loop, then sort and print again.", hint: "ArrayList<Integer>, use add(), for loop or for-each, Collections.sort()" },
            { q: "Explain the 3 uses of 'this' keyword with code examples.", hint: "1. Distinguish variables 2. Call current object methods 3. Constructor chaining" },
            { q: "Create an Encapsulation example: class Person with private name, getter and setter methods.", hint: "private String name; public getName(), public setName()" },
            { q: "What is the difference between Array and ArrayList? Give 3 differences with examples.", hint: "Size: fixed vs dynamic. Type: primitive vs wrapper. Methods: length vs size()" }
        ]
    },

    // ===== WEEK 9 =====
    {
        id: 9,
        num: "W9",
        title: "Date/Time و Enums + مراجعة OOP",
        titleEn: "Date & Time, Enums & OOP Revision",
        topics: ["LocalDate", "LocalTime", "LocalDateTime", "DateTimeFormatter", "Enums", "OOP Revision"],
        content: `
<div class="content-section">
    <h3>📅 التاريخ والوقت | Date and Time</h3>
    <p class="content-text">الجافا بتوفر package اسمه <code>java.time</code> للتعامل مع التاريخ والوقت.</p>

    <table class="content-table">
        <tr><th>Class</th><th>Description</th><th>Format</th></tr>
        <tr><td>LocalDate</td><td>تاريخ بس</td><td>yyyy-MM-dd</td></tr>
        <tr><td>LocalTime</td><td>وقت بس</td><td>HH:mm:ss</td></tr>
        <tr><td>LocalDateTime</td><td>تاريخ ووقت</td><td>yyyy-MM-dd HH:mm:ss</td></tr>
    </table>

    <div class="code-block"><code><span class="kw">import</span> java.time.<span class="cls">LocalDate</span>;
<span class="kw">import</span> java.time.<span class="cls">LocalTime</span>;
<span class="kw">import</span> java.time.<span class="cls">LocalDateTime</span>;

<span class="cls">LocalDate</span> date = <span class="cls">LocalDate</span>.<span class="fn">now</span>();      <span class="cmt">// 2026-06-13</span>
<span class="cls">LocalTime</span> time = <span class="cls">LocalTime</span>.<span class="fn">now</span>();      <span class="cmt">// 18:30:45</span>
<span class="cls">LocalDateTime</span> dt = <span class="cls">LocalDateTime</span>.<span class="fn">now</span>(); <span class="cmt">// 2026-06-13T18:30:45</span></code></div>

    <div class="info-box">
        <h5>💡 ليه now() مش بنستخدم new؟</h5>
        <p>لأن الـ constructor في LocalDate مش public! ده Design Pattern اسمه Factory Method. now() هي static method بترجعلك object.</p>
    </div>

    <h4>🎨 تنسيق التاريخ | DateTimeFormatter</h4>
    <div class="code-block"><code><span class="kw">import</span> java.time.format.<span class="cls">DateTimeFormatter</span>;

<span class="cls">DateTimeFormatter</span> fmt = <span class="cls">DateTimeFormatter</span>.<span class="fn">ofPattern</span>(<span class="str">"dd-MM-yyyy HH:mm:ss"</span>);
<span class="cls">String</span> formatted = dt.<span class="fn">format</span>(fmt);
<span class="cmt">// Output: 13-06-2026 18:30:45</span></code></div>

    <h3>📋 Enums (التعدادات)</h3>
    <p class="content-text">Enum هو "كلاس" خاص بيمثل مجموعة ثوابت. بدل ما تستخدم أرقام أو نصوص عشوائية، بتحدد قيم ثابتة ومحددة.</p>
    <div class="code-block"><code><span class="kw">enum</span> <span class="cls">Day</span> {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

<span class="cls">Day</span> today = <span class="cls">Day</span>.MONDAY;

<span class="cmt">// استخدام مع switch</span>
<span class="kw">switch</span>(today) {
    <span class="kw">case</span> MONDAY: <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Monday!"</span>); <span class="kw">break</span>;
    <span class="kw">case</span> FRIDAY: <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Friday!"</span>); <span class="kw">break</span>;
}

<span class="cmt">// لف على كل القيم</span>
<span class="kw">for</span>(<span class="cls">Day</span> d : <span class="cls">Day</span>.<span class="fn">values</span>()) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(d);
}</code></div>

    <div class="info-box">
        <h5>💡 خصائص Enum</h5>
        <p>✅ القيم public, static, final (ثوابت)<br>
        ✅ ممكن يكون فيه attributes و methods زي الكلاس<br>
        ❌ مش ممكن تعمل منه object بـ new<br>
        ❌ مش ممكن يرث من كلاس تاني (بس يقدر ينفذ interface)<br>
        💡 استخدمه لما تكون عندك قيم ثابتة معروفة (أيام، ألوان، إلخ)</p>
    </div>

    <h3>🔄 مراجعة OOP</h3>
    <p class="content-text">ده ملخص سريع لكل مفاهيم OOP اللي درسناها مع أمثلة عملية:</p>

    <h4>مثال شامل: Car System</h4>
    <div class="code-block"><code><span class="kw">public class</span> <span class="cls">Car</span> {
    <span class="cls">String</span> brand;
    <span class="kw">int</span> speed;

    <span class="kw">void</span> <span class="fn">increaseSpeed</span>(<span class="kw">int</span> value) {
        speed = speed + value;
    }
}

<span class="kw">public class</span> <span class="cls">TestCar</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="cls">Car</span> c1 = <span class="kw">new</span> <span class="cls">Car</span>();
        c1.brand = <span class="str">"Toyota"</span>;
        c1.speed = <span class="num">60</span>;
        c1.<span class="fn">increaseSpeed</span>(<span class="num">20</span>);
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Speed: "</span> + c1.speed);  <span class="cmt">// 80</span>
    }
}</code></div>
</div>
        `,
        mcqQuestions: [
            { q: "Which class is used for date only?", options: ["LocalTime", "LocalDate", "LocalDateTime", "Date"], answer: 1 },
            { q: "Which method gets current date?", options: ["now()", "current()", "today()", "getDate()"], answer: 0 },
            { q: "Why can't you use 'new LocalDate()'?", options: ["It's abstract", "Constructor is not public", "It doesn't exist", "It requires parameters"], answer: 1 },
            { q: "now() is a _____ method", options: ["instance", "abstract", "static", "private"], answer: 2 },
            { q: "Which class formats date-time?", options: ["DateFormat", "DateTimeFormatter", "SimpleDateFormat", "TimeFormat"], answer: 1 },
            { q: "What does 'enum' represent?", options: ["A variable type", "A group of constants", "A class", "A method"], answer: 1 },
            { q: "Enum constants are:", options: ["private", "public static final", "protected", "default"], answer: 1 },
            { q: "Can you create an object from enum using 'new'?", options: ["Yes", "No"], answer: 1 },
            { q: "Can enum extend another class?", options: ["Yes", "No"], answer: 1 },
            { q: "Can enum implement an interface?", options: ["Yes", "No"], answer: 0 },
            { q: "Which method returns all enum values?", options: ["getAll()", "values()", "list()", "constants()"], answer: 1 },
            { q: "enum Level { LOW, MEDIUM, HIGH } Level.MEDIUM is:", options: ["A method", "A constant", "A variable", "An object"], answer: 1 },
            { q: "When should you use enums?", options: ["For changing values", "For fixed, known values", "For user input", "For calculations"], answer: 1 },
            { q: "LocalDateTime.now() returns:", options: ["Date only", "Time only", "Date and time", "Formatted string"], answer: 2 },
            { q: "ofPattern(\"dd-MM-yyyy\") formats date as:", options: ["2026-06-13", "13-06-2026", "06-13-2026", "June 13 2026"], answer: 1 },
            { q: "Can enum have methods?", options: ["Yes", "No"], answer: 0 },
            { q: "Can enum have attributes?", options: ["Yes", "No"], answer: 0 },
            { q: "enum Day { MON, TUE }; Day.MON == Day.MON is:", options: ["true", "false", "Error", "null"], answer: 0 },
            { q: "Which import is needed for LocalDate?", options: ["java.util.Date", "java.time.LocalDate", "java.date.Local", "java.time.Date"], answer: 1 },
            { q: "LocalTime.now() shows:", options: ["Date", "Hour:Minute:Second", "Year", "Day name"], answer: 1 }
        ],
        essayQuestions: [
            { q: "Write a program that displays the current date, time, and formatted date-time using DateTimeFormatter.", hint: "Use LocalDate.now(), LocalTime.now(), LocalDateTime.now(), DateTimeFormatter.ofPattern()" },
            { q: "Create an enum called Season with SPRING, SUMMER, AUTUMN, WINTER. Use it in switch statement and loop through all values.", hint: "enum Season{...}; switch(season){case SPRING:...}; for(Season s : Season.values())" },
            { q: "Write a complete OOP example: Car class with brand/speed, method to increase speed, constructor with parameters, and test class.", hint: "Class with constructor, method, and main testing it" },
            { q: "Write Employee class with encapsulation: private salary, getter/setter. Create object, set salary, and print it.", hint: "private double salary; void setSalary(double s); double getSalary()" },
            { q: "Explain why LocalDate uses now() instead of new LocalDate() constructor.", hint: "Constructor is not public. now() is static factory method. This is a design pattern." }
        ]
    },

    // ===== REVISION 2 =====
    {
        id: 10,
        num: "R2",
        title: "المراجعة النهائية الشاملة",
        titleEn: "Final Comprehensive Revision",
        topics: ["All Topics", "MCQ", "True/False", "Code Writing", "Recursion", "Arrays", "OOP"],
        content: `
<div class="content-section">
    <h3>📝 المراجعة النهائية الشاملة</h3>
    <p class="content-text">ده ملخص شامل لكل المنهج - مراجعة أخيرة قبل الامتحان!</p>

    <h4>✅ أسئلة True/False المهمة</h4>
    <div class="info-box success">
        <h5>تأكد إنك عارف دول:</h5>
        <p>❌ if statement can only check one condition → <strong>False</strong> (ممكن تجمع conditions بـ && و ||)<br>
        ✅ If break is not used in switch, execution continues → <strong>True</strong><br>
        ✅ Functions help reduce code duplication → <strong>True</strong><br>
        ✅ Encapsulation restricts direct access to data → <strong>True</strong><br>
        ❌ Polymorphism means one fixed implementation → <strong>False</strong><br>
        ❌ Default case must be at the end → <strong>False</strong><br>
        ❌ Switch replaces ALL if-else types → <strong>False</strong><br>
        ❌ A method can return multiple values → <strong>False</strong><br>
        ❌ Subclass cannot access superclass members → <strong>False</strong><br>
        ✅ if without braces applies to one statement only → <strong>True</strong></p>
    </div>

    <h4>💻 برامج مهمة للحفظ</h4>
    <p class="content-text"><strong>1. Calculator:</strong></p>
    <div class="code-block"><code><span class="kw">import</span> java.util.<span class="cls">Scanner</span>;
<span class="kw">public class</span> <span class="cls">Calculator</span> {
    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cls">String</span>[] args) {
        <span class="cls">Scanner</span> input = <span class="kw">new</span> <span class="cls">Scanner</span>(<span class="cls">System</span>.in);
        <span class="kw">int</span> num1 = input.<span class="fn">nextInt</span>();
        <span class="kw">int</span> num2 = input.<span class="fn">nextInt</span>();
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Sum = "</span> + (num1 + num2));
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Sub = "</span> + (num1 - num2));
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Mul = "</span> + (num1 * num2));
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Div = "</span> + (num1 / num2));
        <span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Mod = "</span> + (num1 % num2));
    }
}</code></div>

    <p class="content-text"><strong>2. Recursion - Power:</strong></p>
    <div class="code-block"><code><span class="kw">static int</span> <span class="fn">power</span>(<span class="kw">int</span> base, <span class="kw">int</span> exponent) {
    <span class="kw">if</span>(exponent == <span class="num">0</span>) <span class="kw">return</span> <span class="num">1</span>;
    <span class="kw">return</span> base * <span class="fn">power</span>(base, exponent - <span class="num">1</span>);
}
<span class="cmt">// power(2, 4) = 2×2×2×2 = 16</span></code></div>

    <p class="content-text"><strong>3. Student Marks:</strong></p>
    <div class="code-block"><code><span class="kw">int</span>[] marks = {<span class="num">70</span>, <span class="num">85</span>, <span class="num">90</span>, <span class="num">65</span>, <span class="num">88</span>};
<span class="kw">int</span> sum = <span class="num">0</span>;
<span class="kw">for</span>(<span class="kw">int</span> i = <span class="num">0</span>; i < marks.length; i++) {
    <span class="cls">System</span>.out.<span class="fn">println</span>(marks[i]);
    sum += marks[i];
}
<span class="kw">double</span> avg = (<span class="kw">double</span>) sum / marks.length;
<span class="cls">System</span>.out.<span class="fn">println</span>(<span class="str">"Average = "</span> + avg);  <span class="cmt">// 79.6</span></code></div>
</div>
        `,
        mcqQuestions: [
            { q: "Which statement skips current iteration?", options: ["break", "return", "continue", "skip"], answer: 2 },
            { q: "What happens if break is omitted in switch?", options: ["Program stops", "Only one case executes", "Error", "Execution continues to next cases"], answer: 3 },
            { q: "Which is TRUE about method parameters?", options: ["Methods can't have parameters", "Parameters are optional", "Parameters allow passing data", "Parameters must be integers"], answer: 2 },
            { q: "For loop is mainly used when:", options: ["Infinite loops needed", "Can't be nested", "Number of iterations is known", "Runs only once"], answer: 2 },
            { q: "Main purpose of if statement:", options: ["Repeat code", "Make decisions based on conditions", "Define a function", "Store values"], answer: 1 },
            { q: "Best loop when condition depends on user input:", options: ["for", "while", "do-while", "switch"], answer: 1 },
            { q: "Can an if statement combine multiple conditions?", options: ["Yes, using && and ||", "No, only one condition", "Only with switch", "Only with loops"], answer: 0 },
            { q: "Can a method return multiple values directly?", options: ["Yes", "No"], answer: 1 },
            { q: "In inheritance, can subclass access superclass members?", options: ["Yes (public/protected)", "No, never", "Only static members", "Only with casting"], answer: 0 },
            { q: "if without braces applies to:", options: ["All following statements", "Only one statement", "The whole block", "Nothing"], answer: 1 },
            { q: "Default case in switch must be at end?", options: ["Yes", "No, it can be anywhere"], answer: 1 },
            { q: "Switch can replace ALL types of if-else?", options: ["Yes", "No"], answer: 1 },
            { q: "Polymorphism means:", options: ["One form", "Many forms", "No form", "Static form"], answer: 1 },
            { q: "What is power(2,4)?", options: ["8", "16", "6", "4"], answer: 1 },
            { q: "int[] marks = {70,85,90,65,88}; Average?", options: ["75.6", "79.6", "80.0", "76.0"], answer: 1 },
            { q: "Which correctly creates an array of 10 integers?", options: ["int arr[10]", "int arr = new int(10)", "int[] arr = new int[10]", "int arr = int[10]"], answer: 2 },
            { q: "10 % 3 equals:", options: ["3", "1", "0", "3.33"], answer: 1 },
            { q: "What does 'extends' keyword do?", options: ["Implements interface", "Creates inheritance", "Makes abstract", "Adds constructor"], answer: 1 },
            { q: "double x = (double) 5 / 2; x equals:", options: ["2", "2.5", "2.0", "3"], answer: 1 },
            { q: "Which is the correct recursive base case for factorial?", options: ["n == 0 return 1", "n == 1 return n", "n < 0 return 0", "All of above work"], answer: 0 }
        ],
        essayQuestions: [
            { q: "Write a Calculator program that reads two integers and prints Sum, Subtraction, Multiplication, Division, and Modulus.", hint: "Scanner for input, all 5 arithmetic operations\n\nالـ Input اللي هيتدخل:\n5\n\n\nالـ Output المتوقع:\nEnter The Number\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50", expectedInput: "5\n", expectedOutput: "Enter The Number\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50" },
            { q: "Write a recursive method power(base, exponent) and trace the execution of power(2,4).", hint: "power(2,4) = 2*power(2,3) = 2*2*power(2,2) = 2*2*2*power(2,1) = 2*2*2*2*1 = 16" },
            { q: "Write StudentMarks program: array of {70,85,90,65,88}, print all marks and calculate average.", hint: "Loop through array, sum elements, average = (double)sum/length" },
            { q: "Write a program that creates array of 10 integers, reads from user, finds sum and largest number.", hint: "Scanner in loop, track sum and max variables\n\nالـ Input اللي هيتدخل:\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n\n\nالـ Output المتوقع:\nSum: 55\nMax: 10", expectedInput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n", expectedOutput: "Sum: 55\nMax: 10" },
            { q: "Explain 5 key OOP concepts with one-line definitions and simple code examples.", hint: "Class=blueprint, Object=instance, Inheritance=extends, Encapsulation=private+getter/setter, Polymorphism=overloading/overriding" }
        ]
    }
];

// ============================================
// FINAL EXAM DATA GENERATOR
// ============================================
const FINAL_EXAM_DATA = [];

// Loop through all weeks and gather questions for the final exam
WEEKS_DATA.forEach(week => {
    if (week.id !== 6 && week.id !== 'R2') { // Skip pure revision weeks if we want to avoid exact duplicates, or just include all.
        // Add all MCQ
        if (week.mcqQuestions) {
            week.mcqQuestions.forEach((q, idx) => {
                FINAL_EXAM_DATA.push({
                    type: 'mcq',
                    ...q,
                    q: `[${week.num}] ` + q.q
                });
            });
        }
        
        // Add True/False if any
        if (week.tfQuestions) {
            week.tfQuestions.forEach((q, idx) => {
                FINAL_EXAM_DATA.push({
                    type: 'tf',
                    ...q,
                    q: `[${week.num}] ` + q.q
                });
            });
        }

        // Add Essay/Code
        if (week.essayQuestions) {
            week.essayQuestions.forEach((q, idx) => {
                FINAL_EXAM_DATA.push({
                    type: 'code',
                    ...q,
                    q: `[${week.num}] ` + q.q
                });
            });
        }
    }
});

// We can shuffle the FINAL_EXAM_DATA if desired, or leave it ordered by weeks.
