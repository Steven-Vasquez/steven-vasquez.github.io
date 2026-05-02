import PageIntro from "../../components/PageIntro";
import ImageCarousel from "../../components/ImageCarousel";
import "../../stylesheets/ProjectPage.css";

export function LLMChatbotPage() {

    const introDetails = {
        projectTitle: "Context-Aware LLM Chatbot Platform",
        readTime: "5 minute read",
        columnTitles: ["Type📁", "Tools Used🛠️", "Skills Applied🧠"],
        columnRowsInfo: [
            ["AI Application", "Full Stack Web App"],
            ["• Python", "• Flask + FastAPI", "• HTML / JavaScript / CSS", "• ChromaDB", "• MSSQL", "• Ollama", "• Vanna", "• SQLAlchemy", "• DuckDuckGo Search", "• BeautifulSoup", "• nomic-embed-text", "• Qwen3:30b", "• gemma3:12b"],
            ["• LLM Agent Loop Design", "• RAG Pipeline Architecture", "• Vector Embeddings & Semantic Search", "• Dynamic Memory Management", "• Topic Drift Detection", "• Prompt Engineering", "• Text-to-SQL (NL → SQL)", "• API Design (REST + WebSocket)", "• Full Stack Development"]
        ],
        linkColTitles: [],
        linkColLinks: [],
        linkTexts: [],
        introText: [
            "A <strong>context-aware AI chatbot platform</strong> built from the ground up, featuring isolated chat instances, dynamic long-term memory management, and autonomous agentic functionality. Users interact with the chatbot in real time while the system continuously tracks conversation context, detects topic drift, and integrates live tool results — from <strong>live database queries to web search RAG pipelines</strong> — to produce coherent, grounded responses."
        ],
    };

    const overviewImages = [
        "/images/Project_Images/LLMChatbot/overview/chatbot_ui_full.png",
        "/images/Project_Images/LLMChatbot/overview/debug_panel.png",
        "/images/Project_Images/LLMChatbot/overview/memory_recall_example.png",
    ];
    const overviewCaptions = [
        "The chatbot web interface: session list (left), chat panel (center), live debug output (right)",
        "The debug output panel surfacing live agent reasoning, tool calls, and LLM thinking steps in real time",
        "Example of the chatbot recalling context from a previous topic within the same session",
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

                <h1>Project Purpose and Goal</h1>
                <p>This project started as a learning exercise and turned into a working proof-of-concept for a <strong>customer service chatbot</strong> at my company. The goal was to build something that went well beyond a simple prompt-response loop — a platform that could hold genuinely coherent multi-topic conversations, query internal databases in plain English, and pull live information from the web, all while running entirely on <strong>locally hosted models</strong>.</p>
                <p>The design priority was extensibility. Rather than hardcoding any specific behavior, every major capability — the memory pipeline, the SQL tool, the web search tool — is modular. New agent tools can be dropped in as new types of customer inquiries emerge, without touching the core conversation engine.</p>

                <h1>Tech Stack and Architecture</h1>
                <p>The system is split into a lightweight frontend and a Python backend that handles all the heavy lifting:</p>
                <ul>
                    <li><strong>Frontend</strong> — A plain HTML/JavaScript/CSS web interface. Handles user input, displays chat history, and connects to a <strong>WebSocket debug stream</strong> that exposes the agent's live reasoning in a side panel.</li>
                    <li><strong>Backend</strong> — A <strong>Flask + FastAPI</strong> dual-server setup. Flask handles the main chat session routing and conversation persistence; FastAPI hosts the Vanna Text-to-SQL agent endpoint separately.</li>
                    <li><strong>Vector Database</strong> — <strong>ChromaDB</strong> stores two types of embeddings: finalized topic summaries for long-term memory retrieval, and schema embeddings for the Vanna SQL tool's semantic table selection.</li>
                    <li><strong>Structured Database</strong> — <strong>MSSQL</strong> persists all chat messages, session metadata, and finished SQL query results.</li>
                    <li><strong>Local LLM Server</strong> — All models run locally via <strong>Ollama</strong>: <span style={inlineCode}>Qwen3:30b</span> for the SQL agent, <span style={inlineCode}>gemma3:12b</span> for web search synthesis, and <span style={inlineCode}>nomic-embed-text</span> for all embedding tasks.</li>
                </ul>

                <h1>How It Works</h1>
                <p>The chatbot operates as a modular pipeline. Each message a user sends passes through a sequence of stages before a response is generated. Green nodes are SQL database operations, blue are vector database operations, and red are LLM calls:</p>
                <div className="image-container">
                    <img src="/images/Project_Images/LLMChatbot/diagrams/message_flow.png" alt="End-to-end message flow diagram" className="project-images" />
                </div>

                <h1>Memory and Context Management</h1>
                <p>This is the part of the system I'm most proud of. Traditional chatbots either dump their entire history into every prompt (expensive and eventually impossible) or forget everything after a fixed window. This platform does neither.</p>
                <p>Instead, <strong>topic summaries</strong> are maintained in two states: an <em>incremental</em> summary that is continuously updated by the LLM as a conversation topic progresses, and a <em>finalized</em> summary that is written to ChromaDB the moment the system detects the conversation has moved on. When a user revisits a past topic — even sessions later — the relevant finalized summary is retrieved via semantic search and injected into the prompt, giving the illusion of genuine long-term memory without ever bloating the context window.</p>
                <p>The <strong>topic drift detection</strong> step runs on every message. If the LLM determines the subject has changed, it triggers the finalization routine before processing the new topic, so no context is lost at the boundary. The diagram below shows exactly how the prompt builder pulls from both databases to assemble a complete, context-rich prompt before each LLM call:</p>
                <div className="image-container">
                    <img src="/images/Project_Images/LLMChatbot/diagrams/prompt_assembly.png" alt="Prompt assembly pipeline diagram" className="project-images" />
                </div>

                <h1>LLM Agent Loop</h1>
                <p>The agent loop is what separates this from a basic chatbot wrapper. Rather than sending a single prompt and returning the output, the system enters a <strong>multi-step reasoning loop</strong> where the LLM can decide to invoke tools, receive their results, and continue reasoning before producing a final reply.</p>
                <p>Within each loop iteration, the model evaluates the current message list — which includes conversation history, memory summaries, and any tool results accumulated so far — and decides whether to:</p>
                <ul>
                    <li>Call the <strong>Vanna SQL tool</strong> to query the internal MSSQL database in natural language</li>
                    <li>Call the <strong>Web Search RAG tool</strong> to retrieve and synthesize live external information</li>
                    <li>Generate a <strong>final response</strong> when no further tool use is needed</li>
                </ul>
                <p>Each tool result is appended to the message list before the next iteration, so the LLM always has full visibility into what has already been retrieved. This lets it issue follow-up queries when initial results are incomplete, rather than guessing or hallucinating.</p>

                <h1>The Vanna Tool: Text-to-SQL</h1>
                <p>The Vanna tool allows users to query a live MSSQL database using plain English. The core engineering challenge is <strong>schema injection</strong> — a real production database has dozens of tables and hundreds of columns, and dumping the entire schema into every prompt is wasteful and noisy. The solution is a semantic retrieval step that injects only what's relevant.</p>

                <h2>How It Works</h2>
                <p>Incoming queries first hit a <strong>role-based access check</strong> via a <span style={inlineCode}>SimpleUserResolver</span> that gates tool access by the user's group membership before any processing begins.</p>
                <p>The <strong><span style={inlineCode}>SemanticSchemaEnhancer</span></strong> then runs before the LLM ever sees the prompt. It embeds the user's query using <span style={inlineCode}>nomic-embed-text</span> and computes cosine similarity against precomputed embeddings for every table and column in the schema. Each table is scored using a composite formula — table-level similarity, max column match, and a weighted top-K column average — and the <strong>top five tables</strong> are selected. Their column descriptions and a hardcoded relationship map are injected into the system prompt. Schema embeddings are generated once at setup time from human-written descriptions in <span style={inlineCode}>column_semantics.py</span>, keeping query-time overhead minimal.</p>
                <p>The enriched prompt is handed to <span style={inlineCode}>Qwen3:30b</span> via Ollama, which also consults a <strong>ChromaDB memory store of past queries</strong> to improve consistency on repeated question patterns. Generated SQL is validated through a <strong>SQLAlchemy event listener</strong> before execution: full-table scans on the largest table are blocked if no <span style={inlineCode}>WHERE</span> clause is present, and any unbounded <span style={inlineCode}>SELECT</span> is automatically capped with <span style={inlineCode}>TOP 1000</span> to prevent memory issues. The validated query runs via <span style={inlineCode}>MSSQLRunner</span> and returns a DataFrame. The agent loop supports up to <strong>25 iterations</strong> for multi-step follow-up queries before synthesizing a final natural language response.</p>
                <div className="image-container">
                    <img src="/images/Project_Images/LLMChatbot/diagrams/vanna_text2sql.png" alt="Vanna Text-to-SQL pipeline diagram" className="project-images" />
                </div>

                <h1>The Web Search Tool: RAG Pipeline</h1>
                <p>The Web Search tool handles questions that require live, external information that the LLM's training data can't answer. It runs a full <strong>retrieval-augmented generation (RAG) pipeline</strong> — from raw search results to a cited, LLM-synthesized answer — using only free, locally hosted components.</p>

                <h2>How It Works</h2>
                <p>The user's query is sent to <strong>DuckDuckGo</strong> via the <span style={inlineCode}>ddgs</span> library, returning up to 8 result URLs trimmed to the top 5. Each page is fetched with <span style={inlineCode}>requests</span> and parsed with <strong>BeautifulSoup</strong> — noise tags like scripts, styles, navbars, and footers are stripped before extracting clean plain text.</p>
                <p>Each cleaned document is <strong>split into overlapping chunks</strong> (600 characters, 150-character overlap), with every chunk tagged with a source ID and origin URL to preserve attribution. The query and all chunks are then embedded using <span style={inlineCode}>nomic-embed-text</span>, and cosine similarity is computed via <strong>sklearn</strong> to rank and select the <strong>top 6 chunks</strong> — with a hard cap of 2 chunks per source so no single page dominates the context.</p>
                <p>The selected chunks are assembled into a structured RAG prompt that includes context passages, labeled source references, and the original question. This is passed to <span style={inlineCode}>gemma3:12b</span> via <strong>Ollama's streaming API</strong>, where NDJSON response lines are collected and joined into a final cited answer. If a <span style={inlineCode}>debug_emit</span> callback is active, the full processing log surfaces as a <span style={inlineCode}>ToolProcessingEvent</span> in the chatbot's debug output panel.</p>
                <div className="image-container">
                    <img src="/images/Project_Images/LLMChatbot/diagrams/web_search.png" alt="Web Search RAG pipeline diagram" className="project-images" />
                </div>

                <h1>What I Learned</h1>
                <p>This project pushed me into territory I hadn't worked in before. Designing the memory pipeline — and specifically getting the topic drift detection and finalization timing right — required a lot of iteration. Getting the agent loop to behave predictably across different question types, knowing when to call a tool versus answer directly, was equally tricky and came down to careful prompt engineering.</p>
                <p>On the infrastructure side, running everything locally on hosted models meant I had to be thoughtful about what went into each prompt. The semantic schema selection for Vanna was a direct result of realizing that naively injecting the full schema made the SQL generation noticeably worse, not better. Keeping each component modular made it much easier to iterate on any one piece without breaking the others.</p>
                <p>The end result is a platform I can realistically build on top of — the next step would be integrating additional company-specific agent tools and tightening up the role-based access controls for a real deployment.</p>

            </div>
        </>
    );
}

export default LLMChatbotPage;