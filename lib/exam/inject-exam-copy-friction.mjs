/** @typedef {"reading" | "listening"} ExamCopyFrictionKind */

const MARKER = 'id="exam-copy-friction-script"';

/**
 * @param {ExamCopyFrictionKind} kind
 */
function buildCopyFrictionScript(kind) {
  const kindLiteral = kind === "listening" ? "listening" : "reading";
  return `<script ${MARKER}>
(function(){
  var KIND=${JSON.stringify(kindLiteral)};
  var MIN_CHARS=80;
  var FOOTER="\\n\\nfrom anthichtuhoc\\n";
  var ALPHABET="bcdfghjklmnpqrstvwxyz23456789";

  function noiseToken(seed,len){
    len=len||8;
    var token="",s=seed,i;
    for(i=0;i<len;i++){
      s=(s*1103515245+12345)&0x7fffffff;
      token+=ALPHABET[s%ALPHABET.length];
    }
    return "["+token+"]";
  }

  function normalizeParagraph(text){
    return text.replace(/\\s+/g," ").trim();
  }

  function splitCopyParagraphs(text){
    var normalized=text.replace(/\\r\\n/g,"\\n").trim();
    if(!normalized)return [];
    var byDouble=normalized.split(/\\n\\s*\\n/).map(normalizeParagraph).filter(Boolean);
    if(byDouble.length>=2)return byDouble;
    var bySingle=normalized.split(/\\n/).map(normalizeParagraph).filter(Boolean);
    if(bySingle.length>=2){
      var substantial=bySingle.filter(function(line){return line.length>=40;});
      if(substantial.length>=2)return substantial;
      if(bySingle.length>=3)return bySingle;
    }
    if(byDouble.length)return byDouble;
    if(bySingle.length)return bySingle;
    return [normalized];
  }

  function shouldApplyCopyFriction(text){
    var trimmed=text.replace(/\\r\\n/g,"\\n").trim();
    return trimmed.length>=MIN_CHARS;
  }

  function insertMidParagraphNoise(text,paragraphIndex){
    var words=text.split(/\\s+/).filter(Boolean);
    if(words.length===0)return text;
    if(words.length<4){
      var mid=Math.max(1,Math.floor(words.length/2));
      words.splice(mid,0,noiseToken(paragraphIndex*17+3,7));
      return words.join(" ");
    }
    function insertAt(ratio,seed){
      var idx=Math.max(1,Math.min(words.length-1,Math.floor(words.length*ratio)));
      words.splice(idx,0,noiseToken(seed,8));
    }
    insertAt(0.5,paragraphIndex*7919+11);
    if(words.length>=55)insertAt(0.33,paragraphIndex*7919+29);
    if(words.length>=90)insertAt(0.66,paragraphIndex*7919+47);
    return words.join(" ");
  }

  function applyCopyFriction(text){
    var paragraphs=splitCopyParagraphs(text);
    var blocks=paragraphs.length>0
      ?paragraphs.map(function(p,i){return insertMidParagraphNoise(p,i);})
      :[insertMidParagraphNoise(normalizeParagraph(text),0)];
    return blocks.join("\\n\\n")+FOOTER;
  }

  function preprocessListening(raw){
    return raw.replace(/\\r\\n/g,"\\n").split("\\n").map(function(line){
      var t=line.trim();
      t=t.replace(/^\\d{1,2}:\\d{2}\\s*/,"");
      t=t.replace(/^[A-Z][A-Z'\\s]{0,22}:\\s*/,"");
      return t.trim();
    }).filter(Boolean).join("\\n");
  }

  function shouldApply(raw){
    if(KIND==="listening")return shouldApplyCopyFriction(preprocessListening(raw));
    return shouldApplyCopyFriction(raw);
  }

  function apply(raw){
    if(KIND==="listening")return applyCopyFriction(preprocessListening(raw));
    return applyCopyFriction(raw);
  }

  function selectionInside(root){
    var sel=window.getSelection();
    if(!sel||!sel.rangeCount||sel.isCollapsed)return false;
    return root.contains(sel.getRangeAt(0).commonAncestorContainer);
  }

  function attach(root){
    if(!root||root.getAttribute("data-copy-friction"))return;
    root.setAttribute("data-copy-friction","1");
    root.addEventListener("copy",function(event){
      if(!selectionInside(root))return;
      var raw=window.getSelection().toString()||"";
      if(!shouldApply(raw))return;
      var plain=apply(raw);
      event.preventDefault();
      if(event.clipboardData){
        event.clipboardData.clearData();
        event.clipboardData.setData("text/plain",plain);
      }
    });
  }

  function boot(){
    if(KIND==="listening"){
      var tb=document.getElementById("transcript-body");
      if(tb)attach(tb);
      return;
    }
    var pp=document.getElementById("passage-panel");
    if(pp)attach(pp);
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);
  else boot();
})();
</script>`;
}

/**
 * @param {string} html
 * @param {ExamCopyFrictionKind} kind
 */
export function injectExamCopyFriction(html, kind) {
  const script = buildCopyFrictionScript(kind);
  const existing = /<script id="exam-copy-friction-script">[\s\S]*?<\/script>/;
  if (existing.test(html)) return html.replace(existing, script.trim());
  const bodyIdx = html.lastIndexOf("</body>");
  if (bodyIdx === -1) return html + script;
  return html.slice(0, bodyIdx) + script + html.slice(bodyIdx);
}
