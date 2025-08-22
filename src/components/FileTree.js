import "../stylesheets/FileTree.css";
import React from "react";

// Recursive tree component
const TreeItem = ({ node, prefix = "", isLast = true }) => {
  const connector = prefix ? (isLast ? "└──" : "├──") : "";
  return (
    <div>
      <div>
        {prefix}
        {connector}
        {node.type === "drive" ? "💾" : node.type === "folder" ? "📁" : "📄"}{" "}
        {node.name}
      </div>
      {node.children &&
        node.children.map((child, idx) => (
          <TreeItem
            key={idx}
            node={child}
            prefix={prefix + (isLast ? "  " : "│   ")}
            isLast={idx === node.children.length - 1}
          />
        ))}
    </div>
  );
};

const FileTree = ({ data }) => {
  return (
    <div className="file-tree-container">
      {data.map((node, idx) => (
        <TreeItem key={idx} node={node} isLast={true} />
      ))}
    </div>
  );
};

export default FileTree;
