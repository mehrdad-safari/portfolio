import React, { Component } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { createBlog } from "../../actions";
import { toast } from "react-toastify";
import { Router } from "../../routes";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <div id="preloader"></div>
});

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogTitle: "",
      editorHtml: "",
      initialData: "",
      isSaving: false,
      isSaved: false,
      lockId: Math.floor(1000 + Math.random() * 9000)
    };

    this.saveBlog = this.saveBlog.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.titleInputHandler = this.titleInputHandler.bind(this);
    this.saveBtnHandler = this.saveBtnHandler.bind(this);
  }
  componentDidMount() {
    const { initialValue } = this.props;
    if (initialValue) {
      this.setState({ initialData: initialValue });
    }
  }

  onChangeHandler(e) {
    this.setState({ editorHtml: e });
  }

  saveBlog() {
    const { lockId, blogTitle, editorHtml } = this.state;
    const blog = {};
    blog.title = blogTitle;
    blog.subTitle = blogTitle
      .toString()
      .replace(/\s+/g, "-")
      .toLowerCase();
    blog.story = editorHtml;

    this.setState({ isSaving: true });

    createBlog(blog, lockId)
      .then(createdBlog => {
        this.setState({ isSaving: false, isSaved: true });
        toast.success("Blog Saved Succesfuly!");
        Router.pushRoute(`/blogs/${createdBlog._id}/edit`);
      })
      .catch(err => {
        this.setState({ isSaving: false, isSaved: false });
        toast.error(
          "Unexpected Error, Copy your progress and refresh browser please."
        );
        const message = err.message || "Server Error!";
        console.error(message);
      });
  }
  titleInputHandler(e) {
    this.setState({ blogTitle: e.target.value });
  }
  saveBtnHandler() {
    this.saveBlog();
  }
  render() {
    const { isSaving, isSaved, initialData } = this.state;

    return (
      <div>
        {isSaving && <div id="preloader"></div>}
        <h1 className="title"> Write Your Story... </h1>
        <h2>Title of Post:</h2>
        <input
          type="text"
          className="title"
          onChange={e => this.titleInputHandler(e)}
          value={initialData.title && initialData.title}
        />
        <QuillNoSSRWrapper
          defaultValue={initialData.story && initialData.story}
          onChange={this.onChangeHandler}
          modules={modules}
          formats={formats}
          theme="snow"
        />
        <div className="status-box">{isSaved ? "Saved" : ""}</div>
        <button
          type="button"
          onClick={this.saveBtnHandler}
          className="btn btn-success"
        >
          Save
        </button>
      </div>
    );
  }
}

export default Editor;

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];
