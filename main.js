$(document).ready(function() {
    var preText = null;
    var editor = null;
    var totalLines = 0;
    var totalChars = 0;

    $(".html_editor").each(function() {
        preText = $(this).val().trim();
        editor = CodeMirror.fromTextArea(this, {
            value: preText,
            mode: "htmlmixed",
            lineNumbers: true,
            theme: "neo"
        });

        totalLines = editor.lineCount();
        totalChars = editor.getValue().length;
        editor.autoFormatRange({
            line: 0,
            ch: 0
        }, {
            line: totalLines,
            ch: totalChars
        });
        editor.setCursor(1)
    });

    $(".js_editor").each(function() {
        preText = $(this).val().trim();
        editor = CodeMirror.fromTextArea(this, {
            value: preText,
            mode: "javascript",
            lineNumbers: true,
            theme: "neo"
        });

        totalLines = editor.lineCount();
        totalChars = editor.getValue().length;
        editor.autoFormatRange({
            line: 0,
            ch: 0
        }, {
            line: totalLines,
            ch: totalChars
        });
        editor.setCursor(1)
    });

});
