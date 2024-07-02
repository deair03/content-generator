import React from "react";

function DetailedPageContent() {
  return (
    <>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <div className="p-5 shadow-md border rounded-lg bg-white">
          <img
            className="w-[70px] overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
            src="https://cdn-icons-png.flaticon.com/128/4186/4186534.png"
            alt="card-image"
          />
          <h2 className="font-bold text-2xl mb-2 mt-4 text-[#704ef8]">
            Blog Title
          </h2>
          <p className="text-gray-500 text-sm">
            An AI tool that generates blog titles based on your blog information
          </p>
          <form className="mt-6">
            <div className="my-2 flex flex-col gap-2 mb-7">
              <label className="font-bold">Enter your blog niche</label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                required=""
                name="niche"
              />
            </div>
            <div className="my-2 flex flex-col gap-2 mb-7">
              <label className="font-bold">Enter blog outline</label>
              <textarea
                className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                name="outline"
                rows="5"
                maxLength="2000"
              ></textarea>
              <label className="text-xs text-gray-400">Note: Max 2000 Words</label>
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white bg-[#704ef8] shadow hover:bg-[#7a61e1] h-9 px-4 w-full py-6"
              type="submit"
            >
              Generate Content
            </button>
          </form>
        </div>
        <div className="col-span-2">
          <div className="bg-white shadow-lg border rounded-lg">
            <div className="flex justify-between items-center p-5">
              <h2 className="font-medium text-lg">Your Result</h2>
              <button className=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white bg-[#704ef8] shadow hover:bg-primary/90 h-9 px-4 py-2 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-copy w-4 h-4"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                Copy
              </button>
            </div>
            <div style={{ height: "600px" }}>
              {/* <div className="toastui-editor-defaultUI">
                <div className="toastui-editor-toolbar">
                  <div
                    className="toastui-editor-md-tab-container"
                    style={{ display: "none" }}
                  >
                    <div
                      className="toastui-editor-tabs"
                      role="tabpanel"
                    >
                      <div
                        className="tab-item active"
                        role="tab"
                        aria-label="Write"
                        aria-selected="true"
                        tabIndex="0"
                      >
                        Write
                      </div>
                      <div
                        className="tab-item"
                        role="tab"
                        aria-label="Preview"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Preview
                      </div>
                    </div>
                  </div>
                  <div
                    className="toastui-editor-defaultUI-toolbar"
                    style={{ borderTopLeftRadius: "0px" }}
                  >
                    <div className="toastui-editor-toolbar-group">
                      <button
                        type="button"
                        className="heading toastui-editor-toolbar-icons"
                        aria-label="Headings"
                      ></button>
                      <button
                        type="button"
                        className="bold toastui-editor-toolbar-icons"
                        aria-label="Bold"
                      ></button>
                      <button
                        type="button"
                        className="italic toastui-editor-toolbar-icons"
                        aria-label="Italic"
                      ></button>
                      <button
                        type="button"
                        className="strike toastui-editor-toolbar-icons"
                        aria-label="Strike"
                      ></button>
                      <div className="toastui-editor-toolbar-divider"></div>
                    </div>
                    <div className="toastui-editor-toolbar-group">
                      <button
                        type="button"
                        className="hrline toastui-editor-toolbar-icons"
                        aria-label="Line"
                      ></button>
                      <button
                        type="button"
                        className="quote toastui-editor-toolbar-icons"
                        aria-label="Blockquote"
                      ></button>
                      <div className="toastui-editor-toolbar-divider"></div>
                    </div>
                    <div className="toastui-editor-toolbar-group">
                      <button
                        type="button"
                        className="bullet-list toastui-editor-toolbar-icons"
                        aria-label="Unordered list"
                      ></button>
                      <button
                        type="button"
                        className="ordered-list toastui-editor-toolbar-icons"
                        aria-label="Ordered list"
                      ></button>
                      <button
                        type="button"
                        className="task-list toastui-editor-toolbar-icons"
                        aria-label="Task"
                      ></button>
                      <button
                        type="button"
                        className="indent toastui-editor-toolbar-icons"
                        aria-label="Indent"
                        disabled={true}
                      ></button>
                      <button
                        type="button"
                        className="outdent toastui-editor-toolbar-icons"
                        aria-label="Outdent"
                        disabled={true}
                      ></button>
                      <div className="toastui-editor-toolbar-divider"></div>
                    </div>
                    <div className="toastui-editor-toolbar-group">
                      <button
                        type="button"
                        className="table toastui-editor-toolbar-icons"
                        aria-label="Insert table"
                      ></button>
                      <button
                        type="button"
                        className="image toastui-editor-toolbar-icons"
                        aria-label="Insert image"
                      ></button>
                      <button
                        type="button"
                        className="link toastui-editor-toolbar-icons"
                        aria-label="Insert link"
                      ></button>
                      <div className="toastui-editor-toolbar-divider"></div>
                    </div>
                    <div className="toastui-editor-toolbar-group">
                      <button
                        type="button"
                        className="code toastui-editor-toolbar-icons"
                        aria-label="Inline code"
                      ></button>
                      <button
                        type="button"
                        className="codeblock toastui-editor-toolbar-icons"
                        aria-label="Insert codeBlock"
                      ></button>
                      <div
                        className="toastui-editor-toolbar-divider"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      className="toastui-editor-tooltip"
                      style={{ display: "none", left: "229px", top: "45px" }}
                    >
                      <div className="arrow"></div>
                      <span className="text">Line</span>
                    </div>
                    <div
                      className="toastui-editor-toolbar-group"
                      style={{ display: "none" }}
                    >
                      <button
                        type="button"
                        className="more toastui-editor-toolbar-icons"
                      ></button>
                      <div
                        className="toastui-editor-dropdown-toolbar"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="toastui-editor-popup "
                    role="dialog"
                    style={{ display: "none" }}
                  >
                    <div className="toastui-editor-popup-body"></div>
                  </div>
                </div>
                <div className="toastui-editor-main toastui-editor-ww-mode">
                  <div className="toastui-editor-main-container">
                    <div className="toastui-editor-md-container toastui-editor-md-tab-style">
                      <div
                        className="toastui-editor md-mode active"
                        style={{ minHeight: "200px" }}
                      >
                        <textarea className="toastui-editor-pseudo-clipboard"></textarea>
                        <div
                          contentEditable={true}
                          translate="no"
                          className="ProseMirror"
                        >
                          <div>
                            <br className="ProseMirror-trailingBreak" />
                          </div>
                        </div>
                      </div>
                      <div className="toastui-editor-md-splitter"></div>
                      <div
                        className="toastui-editor-md-preview"
                        style={{ minHeight: "200px" }}
                      >
                        <div className="toastui-editor-contents"></div>
                      </div>
                    </div>
                    <div className="toastui-editor-ww-container">
                      <div
                        className="toastui-editor ww-mode"
                        style={{ minHeight: "200px" }}
                      >
                        <div
                          contentEditable={true}
                          translate="no"
                          className="ProseMirror toastui-editor-contents"
                        >
                          <p>
                            <br className="ProseMirror-trailingBreak" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="toastui-editor-mode-switch"
                  style={{ display: "block" }}
                >
                  <div className="tab-item">Markdown</div>
                  <div className="tab-item active">WYSIWYG</div>
                </div>
                <div
                  className="toastui-editor-context-menu"
                  role="menu"
                  style={{ display: "none" }}
                ></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedPageContent;
