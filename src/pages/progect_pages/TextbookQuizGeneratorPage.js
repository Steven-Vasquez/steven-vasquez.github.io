import PageIntro from "../../components/PageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css";

export function TextbookQuizGeneratorPage() {

    const introDetails = {
        projectTitle: "Textbook Quiz Generator & Autograder",
        readTime: "13 minute read",
        columnTitles: ["Type📁", "Tools Used🛠️", "Skills Applied🧠"],
        columnRowsInfo: [
            ["Education", "Tooling", "AI Application"],
            ["• Python", "• Flask", "• PyMuPDF", "• FAISS", "• sentence-transformers", "• Ollama (Gemma 3 12B)", "• ReportLab", "• HTML / CSS / JavaScript"],
            ["• LLM Prompt Engineering", "• PDF Text Extraction & Chunking", "• Vector Embeddings & Semantic Search", "• RAG Pipeline Design", "• Automated Answer Validation", "• LLM-Powered Autograding", "• PDF Generation", "• Full Stack Web Development"]
        ],
        linkColTitles: ["GitHub🔗"],
        linkColLinks: ["https://github.com/stevenvasquez-avept/Textbook-Quiz-Generator"],
        linkTexts: ["View on GitHub →"],
        introText: [
            "Studying from a textbook is one thing, actually testing your retention is another. This project takes a raw <strong>PDF textbook as input</strong> and runs it through a fully automated pipeline to produce randomized, chapter-specific quizzes with <strong>multiple choice, true/false, and short answer questions</strong>, complete with textbook citations, confidence scores, and <strong>LLM-powered autograding</strong> on free-response questions."
        ],
    };

    const overviewImages = [
        "/images/Project_Images/TextbookQuizGenerator/1_overview/quiz_ui_mcq.png",
        "/images/Project_Images/TextbookQuizGenerator/1_overview/quiz_ui_truefalse.png",
        "/images/Project_Images/TextbookQuizGenerator/1_overview/quiz_ui_shortanswer.png",
        "/images/Project_Images/TextbookQuizGenerator/auto_repair_textbook_cover.jpg"
    ];
    const overviewCaptions = [
        "Multiple choice question with feedback panel showing the correct answer, page citation, justification quote, and answer key confidence score",
        "True/false question with correct feedback and justification citation",
        "Short answer question graded by a locally hosted LLM, with correct answer, feedback, page numbers, and justification",
        "Auto Repair textbook used for both development and demo screenshots"
    ];

    const pipelineImages = [
        "/images/Project_Images/TextbookQuizGenerator/2_pipeline/chunked_json_output.png",
        "/images/Project_Images/TextbookQuizGenerator/2_pipeline/questions_json_output.png",
        "/images/Project_Images/TextbookQuizGenerator/2_pipeline/answer_key_json_output.png",
        "/images/Project_Images/TextbookQuizGenerator/2_pipeline/answer_key_markdown.png",
    ];
    const pipelineCaptions = [
        "chapters_chunked.json output — each chunk tracks exact page numbers for downstream citation",
        "Sample questions JSON output from the generation step, showing structured MCQ entries",
        "Answer key JSON entry showing answer, confidence score, page list, and justification quote per question",
        "Parallel Markdown answer key output designed for human review before the keys are used",
    ];

    const pdfExportImages = [
        "/images/Project_Images/TextbookQuizGenerator/pdf/student_quiz_pdf.png",
        "/images/Project_Images/TextbookQuizGenerator/pdf/answer_key_pdf.png",
    ];
    const pdfExportCaptions = [
        "Student-facing PDF quiz with blank answer lines and checkbox-style true/false fields",
        "Instructor answer key PDF annotated with answers, confidence scores, page citations, and justification quotes per question",
    ];

    const inlineCode = {
        fontFamily: "'Segoe UI Mono', Consolas, monospace",
        backgroundColor: "#eaeaea",
        padding: "0px 4px",
        borderRadius: "4px",
    };

    return (
        <>
            <div className="project-page-container">
                <PageIntro {...introDetails} />

                <ImageCarousel carouselImages={overviewImages} captions={overviewCaptions} />

                <h1>Key Features</h1>
                <ul>
                    <li><strong>Automated question generation</strong> — A locally hosted Gemma 3 12B model generates multiple choice, true/false, and short answer questions from every chunk of a textbook PDF, requiring no manual question writing.</li>
                    <li><strong>Textbook-cited answer keys</strong> — Every answer includes a verbatim justification quote pulled from the source text, the relevant page numbers, and a 1–4 confidence score indicating how strongly the text supports the answer.</li>
                    <li><strong>Two-pass answer validation</strong> — Low-confidence or missing answers trigger a stricter retry prompt. Answers that still fail validation are dropped entirely rather than included with weak support.</li>
                    <li><strong>LLM-powered short answer autograding</strong> — Short answer responses are graded by the same local LLM at temperature 0 for maximum determinism, with a pre-LLM guard that short-circuits blank or trivially short submissions.</li>
                    <li><strong>Randomized quiz sessions</strong> — Each web session samples a fresh random subset of questions per type, so repeated self-testing never produces the same quiz twice.</li>
                    <li><strong>Print-ready PDF export</strong> — ReportLab generates both a clean student-facing quiz and a full instructor answer key as PDFs, plus four randomized sample tests per chapter.</li>
                    <li><strong>Fully local stack</strong> — All LLM inference runs on a locally hosted model via Ollama, with no external API calls or data leaving the machine.</li>
                </ul>

                <h1>Project Purpose and Goal</h1>
                <p>Reading through chapters passively doesn't always reveal gaps in understanding, having to answer questions does. The goal was a pipeline that could take <strong>any textbook PDF</strong> and produce a reusable, self-grading quiz system with minimal manual effort, and one that ran entirely on local hardware, keeping everything private and free of API costs.</p>
                <p>The project covers two distinct halves: an <strong>offline generation pipeline</strong> that processes the textbook and builds the question bank, and an <strong>interactive web app</strong> where students take randomized quizzes and receive immediate feedback. The more technically involved half is the generation pipeline.</p>

                <h1>The Generation Pipeline</h1>
                <p>The pipeline runs in four sequential steps, producing a structured question bank that the web app draws from. Each step outputs files that feed directly into the next, making the pipeline easy to run partially or re-run from any stage.</p>

                <h2>Step 1 — Extract and Split</h2>
                <p><span style={inlineCode}>extract_and_split.py</span> opens the PDF using <strong>PyMuPDF</strong> and first attempts to locate chapters through the document's table of contents. If none is found, it falls back to scanning pages for "Chapter N" heading patterns. Once chapter boundaries are identified, the text of each page is extracted and assembled into chunks no larger than 2,500 characters (configurable via <span style={inlineCode}>.env</span>), with each chunk tracking exactly which page numbers it spans.</p>
                <p>That <strong>page-tracking</strong> is critical. It's what allows every answer generated later to cite a precise page reference back to the source material. Chunks are serialized to a <span style={inlineCode}>chapters_chunked.json</span> file that serves as the input to every subsequent step.</p>

                <h2>Step 2 — Embed and Index</h2>
                <p><span style={inlineCode}>index_and_embed.py</span> encodes every chunk using the <strong>all-MiniLM-L6-v2</strong> sentence-transformers model and stores the resulting vectors in a <strong>FAISS flat inner-product index</strong>. This was built to support semantic retrieval: finding the most relevant chunk for a given question rather than relying purely on the chunk a question was generated from. In the current version this index is prepared but not yet wired into the main flow, leaving it as a foundation for future improvement.</p>

                <h2>Step 3 — Generate Questions</h2>
                <p><span style={inlineCode}>generate_json_questions.py</span> iterates over every chunk in every chapter and sends the chunk text to a locally hosted <strong>Gemma 3 12B</strong> model via Ollama, requesting a set of multiple choice, short answer, and true/false questions per chunk.</p>
                <p>The prompt is one of the more carefully engineered pieces of the project. It explicitly <strong>forbids the model from producing questions that reference how the information was presented</strong>. Phrases like "according to the excerpt," "as stated in the passage," or "the author mentions" are all banned. This is essential because the student taking the quiz never sees the source text; a question that assumes they do is functionally unanswerable.</p>
                <p>A few cleaning steps follow the LLM call: option labels like "A." or "B)" that the model sometimes prepends to MCQ choices are stripped, and MCQ options are shuffled using a <strong>deterministic seed derived from the question text</strong>. That last step avoids positional bias (the tendency for correct answers to cluster at a particular letter position) while keeping shuffles stable across runs for the same question. Each question is then assigned a structured ID (e.g. <span style={inlineCode}>ch05_mcq_001</span>, <span style={inlineCode}>ch05_true_false_003</span>) that encodes chapter, type, and sequence, used throughout the rest of the pipeline and by the quiz frontend to infer question type without a separate metadata field.</p>

                <h2>Step 4 — Generate Answer Keys</h2>
                <p><span style={inlineCode}>generate_json_answer_keys.py</span> is the most complex script. For each question generated in step 3, it sends the originating chunk back to the LLM along with the question and asks it to produce an answer, a verbatim justification quote from the text, the relevant page numbers, and a <strong>confidence score on a 1–4 scale</strong>: 4 meaning explicitly stated verbatim, 3 clearly implied, 2 weak or indirect support, and 1 not stated or contradictory.</p>
                <p>If the first pass returns a low-confidence result, a missing answer, or a sentinel value like "Not explicitly stated," a <strong>second stricter retry prompt</strong> is issued. The retry constrains the model further: on that pass only scores of 4 or 1 are permitted, eliminating the ambiguous middle ground. Answers that still fail validation after the retry are <strong>dropped entirely</strong> rather than included with low confidence.</p>
                <p>For MCQ questions, the answer key prompt enforces an additional constraint: the chosen option must be <strong>semantically equivalent to the justification quote</strong>, not just plausible. This prevents the model from selecting a reasonable-sounding distractor that happens to be defensible but isn't supported by the specific text in the chunk. The output for each chapter is a JSON answer key and a parallel Markdown version for human review.</p>

                <ImageCarousel carouselImages={pipelineImages} captions={pipelineCaptions} />

                <h2>Step 5 — Manual Review</h2>
                <p>The generation pipeline is not perfect, and this step is where human judgment matters. Even with strict prompting, questions occasionally slip through that reference something visually present in the book but unavailable to the quiz taker such as "what does the diagram in this section show?" or "refer to the figure on this page." The Markdown output from step 4 is designed to make this review tractable: each question and its justification citation appear together, so a reviewer can quickly scan for any that depend on visual context and remove them before the answer keys are used.</p>

                <h2>Step 6 — PDF Export <span className="inline-note">(Optional)</span></h2>
                <p><span style={inlineCode}>format_quiz_pdf.py</span> takes the finalized answer keys and generates print-ready PDFs using <strong>ReportLab</strong>: a clean student-facing version with blank answer lines and checkbox-style true/false fields, and a full instructor answer key with answers, confidence scores, page citations, and justification quotes annotated per question. It also generates <strong>four randomized sample tests per chapter</strong>, each drawing a random subset of questions across all three types, which is useful for repeated self-testing without seeing the same questions in the same order.</p>

                <ImageCarousel carouselImages={pdfExportImages} captions={pdfExportCaptions} />

                <h1>The Web Quiz App</h1>
                <p>The web interface provides a more interactive path through the same question bank. On load, the frontend fetches the chapter's JSON answer key, samples a random subset of questions per type (currently <strong>10 MCQ, 10 true/false, and 10 short answer</strong>), and renders them in a card layout. Randomized sampling means each session draws a different mix even against the same chapter.</p>
                <p>After submission, multiple choice and true/false questions are graded by <strong>direct string comparison</strong>. Short answer responses are sent to a <strong>Flask backend</strong> (<span style={inlineCode}>server.py</span>), which constructs a strict grading prompt and forwards it to the same local Gemma 3 12B instance used during generation. Temperature is set to 0 for maximum determinism. A pre-LLM guard short-circuits the round-trip for blank or trivially short responses, returning a zero immediately. The grading prompt forbids the model from rewarding vague answers or inferring implied content, and the response is validated for schema correctness before it reaches the client.</p>
                <p>Inline feedback after submission shows whether each answer was correct, the correct answer if not, the relevant textbook page numbers, the justification citation, and the confidence score of the answer key entry. This <strong>turns a wrong answer into a direct pointer back to the source material</strong>.</p>

                <h1>Reflection</h1>
                <p>The most iterative part of the project was prompt engineering, particularly on the answer generation side. The challenge wasn't getting the LLM to produce answers, it was getting it to <strong>refuse to produce answers when the text didn't support one</strong>, rather than confabulating a plausible-sounding response. The two-pass retry with escalating strictness, combined with validation logic that discards low-confidence results entirely, was the mechanism that made the answer quality reliable enough to actually study from.</p>
                <p>The manual review step is necessary since LLM automation has limits. Prompt engineering can reduce bad questions significantly, but a human pass remains necessary to catch the ones that slipped through, particularly those referencing figures or visual elements that don't survive the text extraction step.</p>

            </div>
        </>
    );
}

export default TextbookQuizGeneratorPage;