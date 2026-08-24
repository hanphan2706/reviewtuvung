const MARKER = 'id="exam-dictionary-popover-script"';

const DICT_CSS = `
#exam-dict-backdrop{position:fixed;inset:0;z-index:1098;background:rgba(0,0,1,.25);display:none}
#exam-dict-popover{
  position:fixed;z-index:1099;display:none;flex-direction:column;
  width:min(380px,calc(100vw - 24px));height:auto;max-height:min(520px,72vh);
  background:#FAFAFA;border:1px solid #E4E4E7;border-radius:12px;
  box-shadow:0 8px 30px rgba(0,0,0,.12);font-family:inherit;color:#000001;
  overflow:hidden;
}
#exam-dict-popover.exam-dict-sheet{
  left:12px!important;right:12px!important;width:auto!important;max-width:32rem;margin:0 auto;
  border-radius:16px 16px 12px 12px;max-height:min(440px,42vh);
}
.exam-dict-hdr{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;
  padding:12px 14px;border-bottom:1px solid #E4E4E7;background:#FAFAFA;flex-shrink:0}
.exam-dict-hdr-title{font-size:15px;font-weight:700;line-height:1.3;flex:1;min-width:0;word-break:break-word}
.exam-dict-badge{display:inline-block;margin-left:6px;padding:2px 7px;border-radius:999px;
  background:#ebebeb;font-size:9px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#47464b;vertical-align:middle}
.exam-dict-close{width:32px;height:32px;border:none;border-radius:8px;background:transparent;
  color:#47464b;font-size:18px;line-height:1;cursor:pointer;flex-shrink:0}
.exam-dict-close:hover{background:#f0f0f0}
.exam-dict-body{
  flex:0 1 auto;max-height:min(300px,40vh);overflow-x:hidden;overflow-y:auto;
  overscroll-behavior:contain;padding:12px 14px 14px;-webkit-overflow-scrolling:touch
}
.exam-dict-loading{display:flex;align-items:center;gap:8px;font-size:13px;color:#47464b}
.exam-dict-spin{width:16px;height:16px;border:2px solid #E4E4E7;border-top-color:#000001;border-radius:50%;animation:examDictSpin .7s linear infinite}
@keyframes examDictSpin{to{transform:rotate(360deg)}}
.exam-dict-muted{font-size:13px;color:#47464b;line-height:1.5}
.exam-dict-pos{font-size:11px;font-weight:600;color:#c45c26;text-transform:lowercase;margin:0 0 4px}
.exam-dict-gloss{font-size:13px;font-weight:600;line-height:1.5;margin:0 0 4px;color:#000001}
.exam-dict-defn{font-size:13px;color:#47464b;line-height:1.55;margin:0}
.exam-dict-quote{font-size:13px;font-style:italic;line-height:1.5;color:#47464b;margin:0 0 8px}
.exam-dict-ex{background:#fafafa;border-radius:6px;padding:8px 10px;margin-top:8px;font-size:12px}
.exam-dict-ex-en{font-style:italic;color:#47464b;margin:0}
.exam-dict-ex-vi{margin:4px 0 0;font-size:12px;color:#000001}
.exam-dict-section{margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid #ebe6f4}
.exam-dict-section:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.exam-dict-pron{display:flex;flex-wrap:wrap;gap:10px 16px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #ebe6f4}
.exam-dict-pron-item{display:flex;align-items:center;gap:6px;font-size:12px;color:#47464b}
.exam-dict-pron-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#71717A}
.exam-dict-pron-play{width:26px;height:26px;border:1px solid #E4E4E7;border-radius:6px;background:#fff;cursor:pointer;font-size:12px}
.exam-dict-foot{padding:10px 14px 12px;border-top:1px solid #E4E4E7;background:#FAFAFA;flex-shrink:0;display:flex;gap:8px}
.exam-dict-btn{flex:1;border:none;border-radius:8px;padding:10px 14px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit}
.exam-dict-btn-primary{background:#000001;color:#FAFAFA}
.exam-dict-btn-primary:hover{opacity:.92}
.exam-dict-btn-primary:disabled{opacity:.45;cursor:not-allowed}
.exam-dict-btn-ghost{background:#f0f0f0;color:#000001}
.exam-dict-deck-list{display:flex;flex-direction:column;gap:6px;margin:8px 0}
.exam-dict-deck-opt{display:flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #E4E4E7;border-radius:8px;background:#fff;cursor:pointer;font-size:13px;text-align:left}
.exam-dict-deck-opt[aria-checked="true"]{border-color:#000001;background:#f5f5f7;font-weight:600}
.exam-dict-field{width:100%;box-sizing:border-box;border:1px solid #E4E4E7;border-radius:8px;padding:9px 11px;font-size:13px;font-family:inherit;margin-top:6px}
.exam-dict-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#71717A;margin:10px 0 4px;display:block}
.exam-dict-term-box{background:#fafafa;border:1px solid #E4E4E7;border-radius:8px;padding:10px 12px;margin-bottom:10px}
.exam-dict-done{text-align:center;padding:16px 8px;font-size:14px;font-weight:600;color:#1a7a30}
.exam-review-dict-hint{
  display:inline-block;margin:0 12px 0 auto;padding:10px 8px 10px 0;font-size:13px;font-weight:600;line-height:1.35;
  font-style:italic;color:#4b2876;flex:0 0 auto;text-align:right;white-space:nowrap
}
.exam-review-tab-group{
  display:flex;align-items:center;flex:1 1 auto;min-width:0;overflow-x:auto;flex-wrap:nowrap;
  gap:4px 12px;-webkit-overflow-scrolling:touch;scrollbar-width:thin
}
#exam-screen.exam-review-mode .ptab-bar,
#passage-tabs.exam-review-dict-bar,
#part-tabs.exam-review-dict-bar{
  display:flex;align-items:center;flex-wrap:nowrap;gap:0;overflow:hidden;padding-right:4px
}
#exam-screen.exam-review-mode .ptab-bar .ptab,
#part-tabs.exam-review-dict-bar .ptab,
#passage-tabs.exam-review-dict-bar .ptab{flex:0 0 auto;min-width:0}
.exam-review-dict-only-bar{justify-content:flex-end;min-height:36px;flex-wrap:nowrap}
#exam-screen.exam-review-mode #hl-popover{display:none!important;pointer-events:none!important}
.transcript-cue{display:flex;width:100%;gap:10px;align-items:flex-start;border:none;background:transparent;padding:8px 10px;margin:0 0 4px;border-radius:8px;text-align:left;cursor:text;font:inherit;color:inherit;user-select:text;-webkit-user-select:text}
.transcript-cue-time{width:42px;flex-shrink:0;font-size:12px;font-weight:600;color:#71717A;font-variant-numeric:tabular-nums;padding-top:2px;user-select:none;-webkit-user-select:none;cursor:text}
.transcript-cue-speaker{font-weight:600;color:#4b2876}
.transcript-cue.is-active .transcript-cue-speaker{color:#4b2876}
.transcript-cue-text{flex:1;min-width:0;cursor:text}
.transcript-cue.is-active{background:#f5f5f7}
.transcript-cue.is-active .transcript-cue-time{color:#000001;font-weight:700}
.transcript-cue.is-active .transcript-cue-text{font-weight:600;color:#000001}
.transcript-q-marker{font-weight:700;color:#4b2876}
#exam-screen.exam-review-mode .transcript-scroll,
#exam-screen.exam-review-mode .transcript-body{cursor:text}
`;

function buildDictionaryPopoverScript(kind) {
  const kindLiteral = kind === "listening" ? "listening" : "reading";
  const hintText = "*Bạn có thể tra và thêm từ vào deck cá nhân ở giao diện này.";
  return `<style id="exam-dictionary-popover-style">${DICT_CSS}</style>
<div id="exam-dict-backdrop" aria-hidden="true"></div>
<div id="exam-dict-popover" role="dialog" aria-label="Từ điển" aria-hidden="true">
  <div class="exam-dict-hdr">
    <div class="exam-dict-hdr-title" id="exam-dict-title"></div>
    <button type="button" class="exam-dict-close" id="exam-dict-close" aria-label="Đóng">&times;</button>
  </div>
  <div class="exam-dict-body" id="exam-dict-body"></div>
  <div class="exam-dict-foot" id="exam-dict-foot" style="display:none"></div>
</div>
<script ${MARKER}>
(function(){
  var KIND=${JSON.stringify(kindLiteral)};
  var HINT_TEXT=${JSON.stringify(hintText)};
  var SRS_KEY="srs-user-data-v1";
  var MAX_CHARS=320;
  var MAX_WORDS_DICT=4;
  var popover=document.getElementById("exam-dict-popover");
  var backdrop=document.getElementById("exam-dict-backdrop");
  var titleEl=document.getElementById("exam-dict-title");
  var bodyEl=document.getElementById("exam-dict-body");
  var footEl=document.getElementById("exam-dict-foot");
  var closeBtn=document.getElementById("exam-dict-close");
  if(!popover||!bodyEl)return;

  var phase="lookup";
  var anchorRect=null;
  var lookup=null;
  var loading=false;
  var selectedDeckId=null;
  var creatingDeck=false;
  var term="";
  var definition="";
  var lookupTimer=null;
  var openedAt=0;
  var audioCache={};
  var srsRemoteLoaded=false;
  var srsLoadStarted=false;
  var srsSaveTimer=null;

  function isReviewMode(){
    return typeof examReviewMode!=="undefined"&&!!examReviewMode;
  }

  function getActiveQuestionsPanelRoot(){
    return document.querySelector("#questions-panel .qsection.active")||
      document.querySelector("#questions-panel #q1-section")||
      document.querySelector("#questions-panel #q-section")||
      document.querySelector("#questions-panel .qsection")||
      document.querySelector("#questions-panel");
  }

  function isInsideTranscriptNode(anc){
    var transcript=document.getElementById("transcript-scroll");
    return !!(transcript&&anc&&transcript.contains(anc));
  }

  function isBlockedSelectionTarget(anc){
    if(!anc||!anc.closest)return true;
    if(isInsideTranscriptNode(anc))return false;
    return !!anc.closest("input,select,textarea,button,.fi,.msel,.fi-num,.mqnum");
  }

  function suppressHighlightPopoverInReview(){
    if(!isReviewMode())return;
    var hlPop=document.getElementById("hl-popover");
    if(hlPop){
      hlPop.style.display="none";
      hlPop.setAttribute("aria-hidden","true");
    }
    if(typeof hideHlPopover==="function"){
      try{hideHlPopover();}catch(e){}
    }
  }

  function normalizeSelectionText(text,root){
    var t=text.trim().replace(/\\s+/g," ");
    if(root&&root.id==="transcript-scroll"){
      t=t.replace(/(?:\\d{1,2}:)?\\d{1,2}:\\d{2}\\s*/g," ").replace(/\\s+/g," ").trim();
    }
    return t;
  }

  function getDictionarySelectionRoot(){
    if(!isReviewMode())return null;
    var sel=window.getSelection();
    if(!sel||!sel.rangeCount)return null;
    var anc=sel.getRangeAt(0).commonAncestorContainer;
    if(anc.nodeType===3)anc=anc.parentElement;
    if(isBlockedSelectionTarget(anc))return null;
    var questions=getActiveQuestionsPanelRoot();
    if(KIND==="listening"){
      var transcript=document.getElementById("transcript-scroll");
      if(transcript&&transcript.contains(anc))return transcript;
      if(questions&&questions.contains(anc))return questions;
      return null;
    }
    var passage=document.querySelector("#passage-panel .passage-content.active .p-body")||
      document.querySelector(".passage-content.active .p-body")||
      document.querySelector("#passage-panel .p-body");
    if(passage&&passage.contains(anc))return passage;
    if(questions&&questions.contains(anc))return questions;
    return null;
  }

  function parseReadingSelection(text){
    var t=text.trim().replace(/\\s+/g," ");
    if(t.length<2)return null;
    if(t.length>MAX_CHARS)t=t.slice(0,MAX_CHARS);
    var words=t.split(" ").filter(Boolean);
    if(!words.length)return null;
    if(words.length===1)return{query:t,mode:"word"};
    if(words.length<=MAX_WORDS_DICT)return{query:t,mode:"phrase"};
    return{query:t,mode:"translate-only"};
  }

  function htmlToPlainTrim(s){
    if(!s)return"";
    var d=document.createElement("div");
    d.innerHTML=s;
    return (d.textContent||"").trim();
  }

  function formatLookupForDeck(result){
    if(result.error)return result.error;
    if(result.kind==="phrase"&&result.phraseGlossVi)return result.phraseGlossVi;
    var lines=[];
    var senses=result.senses||[];
    for(var i=0;i<senses.length;i++){
      var s=senses[i];
      var pos=s.partOfSpeechVi||s.partOfSpeech;
      if(s.glossVi&&s.glossViReliable!==false)lines.push("("+pos+") "+s.glossVi);
      if(s.definitionEn)lines.push("("+pos+") "+s.definitionEn);
      var exs=s.examples||[];
      for(var j=0;j<exs.length;j++){
        if(exs[j].en)lines.push("Ex: "+exs[j].en);
        if(exs[j].vi)lines.push(exs[j].vi);
      }
    }
    var paras=result.paraphrases||[];
    if(paras.length){
      lines.push("Paraphrase:");
      for(var k=0;k<paras.length;k++){
        lines.push(paras[k].vi?paras[k].en+" — "+paras[k].vi:paras[k].en);
      }
    }
    return lines.join("\\n")||result.query;
  }

  function uuid(){
    if(typeof crypto!=="undefined"&&crypto.randomUUID)return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){
      var r=Math.random()*16|0,v=c==="x"?r:(r&3|8);
      return v.toString(16);
    });
  }

  function readSrsPayload(){
    try{
      var raw=localStorage.getItem(SRS_KEY);
      if(!raw)return null;
      var parsed=JSON.parse(raw);
      return parsed.state||parsed;
    }catch(e){return null;}
  }

  function writeLocalSrsPayload(state){
    var version=3;
    try{
      var raw=localStorage.getItem(SRS_KEY);
      if(raw){
        var parsed=JSON.parse(raw);
        if(parsed&&parsed.version)version=parsed.version;
      }
    }catch(e){}
    localStorage.setItem(SRS_KEY,JSON.stringify({state:state,version:version}));
  }

  function writeSrsPayload(state){
    writeLocalSrsPayload(state);
    scheduleSrsSave();
  }

  function scheduleSrsSave(){
    clearTimeout(srsSaveTimer);
    srsSaveTimer=setTimeout(function(){
      var p=readSrsPayload();
      if(!p||!p.userId||p.userId==="local-user")return;
      fetch("/api/srs/payload",{
        method:"PUT",
        credentials:"include",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(p)
      }).catch(function(){});
    },600);
  }

  async function ensureSrsLoaded(){
    if(srsRemoteLoaded)return;
    try{
      var res=await fetch("/api/srs/payload",{credentials:"include"});
      if(res.status===401)return;
      if(!res.ok)return;
      var remote=await res.json();
      if(!remote||typeof remote.userId!=="string")return;
      writeLocalSrsPayload({
        userId:remote.userId,
        decks:Array.isArray(remote.decks)?remote.decks:[],
        words:Array.isArray(remote.words)?remote.words:[],
        settings:remote.settings&&typeof remote.settings.dailyReviewLimit==="number"
          ?remote.settings:{dailyReviewLimit:15},
        reviewDayTallies:remote.reviewDayTallies&&typeof remote.reviewDayTallies==="object"
          ?remote.reviewDayTallies:{}
      });
      srsRemoteLoaded=true;
    }catch(e){}
  }

  function maybeLoadSrs(){
    if(srsLoadStarted||!isReviewMode())return;
    srsLoadStarted=true;
    void ensureSrsLoaded();
  }

  function ensureReviewTabGroup(bar){
    var group=bar.querySelector(":scope > .exam-review-tab-group");
    if(!group){
      group=document.createElement("div");
      group.className="exam-review-tab-group";
      var kids=Array.prototype.slice.call(bar.children);
      for(var i=0;i<kids.length;i++){
        var child=kids[i];
        if(child.id==="exam-review-dict-hint")continue;
        if(child.classList&&child.classList.contains("ptab"))group.appendChild(child);
      }
      bar.insertBefore(group,bar.firstChild);
    }
    return group;
  }

  function showReviewDictionaryHint(){
    var existing=document.getElementById("exam-review-dict-hint");
    if(existing)existing.remove();
    var tabId=KIND==="listening"?"part-tabs":"passage-tabs";
    var bar=document.getElementById(tabId)||document.querySelector(".ptab-bar");
    if(!bar){
      var anchor=document.getElementById("prog-wrap")||document.getElementById("main");
      if(!anchor||!anchor.parentNode)return;
      bar=document.createElement("div");
      bar.className="ptab-bar exam-review-dict-only-bar";
      bar.id=tabId;
      anchor.parentNode.insertBefore(bar,anchor);
    }else{
      if(!bar.id)bar.id=tabId;
      bar.classList.add("exam-review-dict-bar");
      ensureReviewTabGroup(bar);
    }
    var hint=document.createElement("span");
    hint.id="exam-review-dict-hint";
    hint.className="exam-review-dict-hint";
    hint.textContent=HINT_TEXT;
    bar.appendChild(hint);
  }

  window.__examDictEnterReviewMode=function(){
    maybeLoadSrs();
    showReviewDictionaryHint();
  };

  function normalizeDeckName(raw){
    var s=String(raw||"").replace(/\\r?\\n/g," ").replace(/\\s+/g," ").trim();
    return s||"Untitled deck";
  }

  function getDecks(){
    var p=readSrsPayload();
    return p&&Array.isArray(p.decks)?p.decks:[];
  }

  function addWordToDeck(deckId,termText,defText){
    if(!htmlToPlainTrim(termText))return false;
    var p=readSrsPayload()||{userId:"local-user",decks:[],words:[],settings:{dailyReviewLimit:15},reviewDayTallies:{}};
    if(!p.decks.some(function(d){return d.id===deckId;}))return false;
    var now=Date.now();
    var word={
      id:uuid(),userId:p.userId||"local-user",deckId:deckId,
      term:String(termText).trim(),definition:String(defText).trim(),
      createdAt:now,nextReviewAt:now,lastReviewedAt:null,lastRating:null,hardPriority:false
    };
    p.words=Array.isArray(p.words)?p.words.concat([word]):[word];
    writeSrsPayload(p);
    return true;
  }

  function createDeck(name){
    var p=readSrsPayload()||{userId:"local-user",decks:[],words:[],settings:{dailyReviewLimit:15},reviewDayTallies:{}};
    var now=Date.now();
    var deck={id:uuid(),userId:p.userId||"local-user",name:normalizeDeckName(name),createdAt:now};
    p.decks=Array.isArray(p.decks)?p.decks.concat([deck]):[deck];
    writeSrsPayload(p);
    return deck.id;
  }

  function isCoarsePointer(){
    return window.matchMedia&&window.matchMedia("(pointer:coarse)").matches;
  }

  function hidePopover(){
    popover.style.display="none";
    popover.setAttribute("aria-hidden","true");
    popover.style.maxHeight="";
    popover.style.height="";
    if(backdrop){backdrop.style.display="none";backdrop.setAttribute("aria-hidden","true");}
    anchorRect=null;
    lookup=null;
    loading=false;
    phase="lookup";
    footEl.style.display="none";
    footEl.innerHTML="";
    bodyEl.innerHTML="";
    titleEl.textContent="";
  }

  function positionPopover(rect){
    if(!rect||rect.width<1&&rect.height<1){hidePopover();return;}
    var sheet=isCoarsePointer();
    var pad=12,gap=8,maxW=380;
    var capH=sheet?Math.min(440,Math.floor(window.innerHeight*0.42)):Math.min(520,Math.floor(window.innerHeight*0.72));
    popover.classList.toggle("exam-dict-sheet",sheet);
    if(backdrop){
      backdrop.style.display=sheet?"block":"none";
      backdrop.setAttribute("aria-hidden",sheet?"false":"true");
    }
    popover.style.display="flex";
    popover.setAttribute("aria-hidden","false");
    popover.style.height="auto";
    if(sheet){
      popover.style.maxHeight=capH+"px";
      popover.style.left="12px";
      popover.style.right="12px";
      popover.style.top="auto";
      popover.style.bottom="12px";
      popover.style.visibility="visible";
      return;
    }
    var spaceBelow=window.innerHeight-rect.bottom-gap-pad;
    var spaceAbove=rect.top-gap-pad;
    var flipAbove=spaceBelow<spaceAbove;
    var available=Math.max(120,flipAbove?spaceAbove:spaceBelow);
    popover.style.maxHeight=Math.min(capH,available)+"px";
    popover.style.visibility="hidden";
    popover.style.left="0";
    popover.style.top="0";
    popover.style.bottom="auto";
    var pw=popover.offsetWidth||maxW;
    var left=rect.left+rect.width/2-pw/2;
    left=Math.max(pad,Math.min(left,window.innerWidth-pw-pad));
    popover.style.left=left+"px";
    requestAnimationFrame(function(){
      var ph=popover.offsetHeight||100;
      var top=flipAbove?rect.top-gap-ph:rect.bottom+gap;
      top=Math.max(pad,Math.min(top,window.innerHeight-ph-pad));
      popover.style.top=top+"px";
      popover.style.visibility="visible";
    });
  }

  function refreshPopoverLayout(){
    if(!anchorRect||popover.style.display!=="flex")return;
    requestAnimationFrame(function(){
      positionPopover(anchorRect);
    });
  }

  function esc(s){
    return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function renderLookupBody(){
    if(loading){
      bodyEl.innerHTML='<div class="exam-dict-loading"><span class="exam-dict-spin"></span>Đang tra…</div>';
      footEl.style.display="none";
      refreshPopoverLayout();
      return;
    }
    if(!lookup){
      bodyEl.innerHTML="";
      footEl.style.display="none";
      refreshPopoverLayout();
      return;
    }
    if(lookup.error){
      bodyEl.innerHTML='<p class="exam-dict-muted">'+esc(lookup.error)+'</p>';
      footEl.style.display="none";
      refreshPopoverLayout();
      return;
    }
    var html="";
    var pron=lookup.pronunciation;
    if(lookup.kind==="word"&&pron&&(pron.us||pron.uk)){
      html+='<div class="exam-dict-pron">';
      ["us","uk"].forEach(function(label){
        var data=pron[label];
        if(!data||(!data.ipa&&!data.audioUrl))return;
        html+='<div class="exam-dict-pron-item"><span class="exam-dict-pron-label">'+label.toUpperCase()+'</span>';
        if(data.audioUrl){
          html+='<button type="button" class="exam-dict-pron-play" data-audio="'+esc(data.audioUrl)+'" aria-label="Phát âm">&#9654;</button>';
        }
        if(data.ipa)html+='<span style="font-family:monospace;font-size:11px">'+esc(data.ipa)+'</span>';
        html+='</div>';
      });
      html+='</div>';
    }
    if(lookup.formNote){
      html+='<p class="exam-dict-muted" style="margin:0 0 10px;font-size:12px">'+esc(lookup.formNote)+'</p>';
    }else if(lookup.headword&&lookup.headword!==lookup.query.toLowerCase()){
      html+='<p class="exam-dict-muted" style="margin:0 0 10px;font-size:12px">Từ gốc: <strong>'+esc(lookup.headword)+'</strong></p>';
    }
    var isTranslateOnly=lookup.phraseGlossVi&&(!lookup.senses||!lookup.senses.length);
    if(lookup.phraseGlossVi&&(lookup.kind==="phrase"||isTranslateOnly)){
      if(isTranslateOnly){
        html+='<p class="exam-dict-quote">&ldquo;'+esc(lookup.query)+'&rdquo;</p>';
      }
      html+='<p class="exam-dict-gloss">'+esc(lookup.phraseGlossVi)+'</p>';
    }
    var senses=lookup.senses||[];
    for(var i=0;i<senses.length;i++){
      var s=senses[i];
      html+='<div class="exam-dict-section">';
      html+='<p class="exam-dict-pos">'+esc(s.partOfSpeech)+'</p>';
      if(s.glossVi&&s.glossViReliable!==false)html+='<p class="exam-dict-gloss">'+esc(s.glossVi)+'</p>';
      html+='<p class="exam-dict-defn">'+esc(s.definitionEn)+'</p>';
      var exs=s.examples||[];
      for(var j=0;j<exs.length;j++){
        html+='<div class="exam-dict-ex"><p class="exam-dict-ex-en">&ldquo;'+esc(exs[j].en)+'&rdquo;</p>';
        if(exs[j].vi)html+='<p class="exam-dict-ex-vi">'+esc(exs[j].vi)+'</p>';
        html+='</div>';
      }
      html+='</div>';
    }
    var paras=lookup.paraphrases||[];
    if(paras.length){
      html+='<div class="exam-dict-section"><p class="exam-dict-label">Paraphrase</p>';
      for(var k=0;k<paras.length;k++){
        html+='<p class="exam-dict-defn" style="margin-bottom:4px">'+
          esc(paras[k].en)+(paras[k].vi?' — '+esc(paras[k].vi):'')+'</p>';
      }
      html+='</div>';
    }
    bodyEl.innerHTML=html;
    bodyEl.querySelectorAll("[data-audio]").forEach(function(btn){
      btn.addEventListener("click",function(){
        var url=btn.getAttribute("data-audio");
        if(!url)return;
        if(!audioCache[url])audioCache[url]=new Audio(url);
        audioCache[url].currentTime=0;
        audioCache[url].play().catch(function(){});
      });
    });
    renderFooter();
  }

  function canShowAdd(){
    if(!lookup)return false;
    if(window.__EXAM_BOOT__&&window.__EXAM_BOOT__.disableDeck)return false;
    return Boolean(String(lookup.query||"").trim());
  }

  function renderFooter(){
    footEl.innerHTML="";
    if(phase==="lookup"){
      if(!canShowAdd()){footEl.style.display="none";refreshPopoverLayout();return;}
      footEl.style.display="flex";
      var addBtn=document.createElement("button");
      addBtn.type="button";
      addBtn.className="exam-dict-btn exam-dict-btn-primary";
      addBtn.textContent="Thêm vào bộ thẻ";
      addBtn.addEventListener("click",function(){
        void ensureSrsLoaded().then(function(){
          var decks=getDecks();
          selectedDeckId=selectedDeckId&&decks.some(function(d){return d.id===selectedDeckId;})
            ?selectedDeckId:(decks[0]?decks[0].id:null);
          phase="pick-deck";
          renderPickDeck();
        });
      });
      footEl.appendChild(addBtn);
      refreshPopoverLayout();
      return;
    }
    if(phase==="pick-deck"){
      footEl.style.display="flex";
      var next=document.createElement("button");
      next.type="button";
      next.className="exam-dict-btn exam-dict-btn-primary";
      next.textContent="Tiếp tục";
      next.disabled=!selectedDeckId;
      next.addEventListener("click",function(){
        if(!selectedDeckId)return;
        term=lookup.query;
        var formatted=formatLookupForDeck(lookup);
        definition=(lookup.error&&formatted===lookup.error)?(lookup.phraseGlossVi||""):formatted;
        phase="add";
        renderAddForm();
      });
      footEl.appendChild(next);
      refreshPopoverLayout();
      return;
    }
    if(phase==="add"){
      footEl.style.display="flex";
      var save=document.createElement("button");
      save.type="button";
      save.className="exam-dict-btn exam-dict-btn-primary";
      save.textContent="Lưu từ";
      save.addEventListener("click",function(){
        if(!selectedDeckId||!htmlToPlainTrim(term))return;
        if(addWordToDeck(selectedDeckId,term,definition)){
          phase="done";
          renderDone();
        }
      });
      footEl.appendChild(save);
      refreshPopoverLayout();
      return;
    }
    footEl.style.display="none";
    refreshPopoverLayout();
  }

  function renderPickDeck(){
    titleEl.innerHTML=esc("Thêm vào bộ thẻ");
    var decks=getDecks();
    var html='<div class="exam-dict-term-box"><span class="exam-dict-label">Từ đang chọn</span><strong>'+esc(lookup.query)+'</strong></div>';
    html+='<span class="exam-dict-label">Chọn bộ thẻ của bạn</span>';
    if(!decks.length&&!creatingDeck){
      html+='<p class="exam-dict-muted">Chưa có bộ thẻ. Tạo bộ thẻ đầu tiên bên dưới.</p>';
    }
    if(!creatingDeck){
      html+='<div class="exam-dict-deck-list">';
      for(var i=0;i<decks.length;i++){
        var d=decks[i];
        var checked=d.id===selectedDeckId?' aria-checked="true"':' aria-checked="false"';
        html+='<button type="button" class="exam-dict-deck-opt" data-deck-id="'+esc(d.id)+'"'+checked+'>'+esc(d.name)+'</button>';
      }
      html+='</div>';
      html+='<button type="button" class="exam-dict-btn exam-dict-btn-ghost" id="exam-dict-new-deck" style="width:100%">+ Tạo bộ thẻ mới</button>';
    }else{
      html+='<label class="exam-dict-label" for="exam-dict-deck-name">Tên bộ thẻ</label>';
      html+='<input class="exam-dict-field" id="exam-dict-deck-name" type="text" placeholder="VD: IELTS Reading" />';
      html+='<div style="display:flex;gap:8px;margin-top:10px">';
      html+='<button type="button" class="exam-dict-btn exam-dict-btn-primary" id="exam-dict-create-deck" style="flex:1">Tạo</button>';
      html+='<button type="button" class="exam-dict-btn exam-dict-btn-ghost" id="exam-dict-cancel-deck" style="flex:1">Hủy</button>';
      html+='</div>';
    }
    bodyEl.innerHTML=html;
    bodyEl.querySelectorAll(".exam-dict-deck-opt").forEach(function(btn){
      btn.addEventListener("click",function(){
        selectedDeckId=btn.getAttribute("data-deck-id");
        bodyEl.querySelectorAll(".exam-dict-deck-opt").forEach(function(b){
          b.setAttribute("aria-checked",b===btn?"true":"false");
        });
        renderFooter();
      });
    });
    var newDeckBtn=document.getElementById("exam-dict-new-deck");
    if(newDeckBtn)newDeckBtn.addEventListener("click",function(){creatingDeck=true;renderPickDeck();});
    var cancelDeck=document.getElementById("exam-dict-cancel-deck");
    if(cancelDeck)cancelDeck.addEventListener("click",function(){creatingDeck=false;renderPickDeck();});
    var createDeckBtn=document.getElementById("exam-dict-create-deck");
    if(createDeckBtn)createDeckBtn.addEventListener("click",function(){
      var input=document.getElementById("exam-dict-deck-name");
      var name=input&&input.value?input.value.trim():"";
      if(!name)return;
      selectedDeckId=createDeck(name);
      creatingDeck=false;
      renderPickDeck();
    });
    renderFooter();
  }

  function renderAddForm(){
    titleEl.textContent="Thêm từ";
    bodyEl.innerHTML=
      '<label class="exam-dict-label" for="exam-dict-term">Từ / cụm</label>'+
      '<input class="exam-dict-field" id="exam-dict-term" value="'+esc(term)+'" />'+
      '<label class="exam-dict-label" for="exam-dict-defn">Nghĩa / ghi chú</label>'+
      '<textarea class="exam-dict-field" id="exam-dict-defn" rows="5" style="resize:vertical">'+esc(definition)+'</textarea>';
    var termInput=document.getElementById("exam-dict-term");
    var defInput=document.getElementById("exam-dict-defn");
    if(termInput)termInput.addEventListener("input",function(){term=termInput.value;});
    if(defInput)defInput.addEventListener("input",function(){definition=defInput.value;});
    renderFooter();
  }

  function renderDone(){
    titleEl.textContent="Đã lưu";
    bodyEl.innerHTML='<div class="exam-dict-done">Đã thêm vào bộ thẻ của bạn.</div>';
    footEl.style.display="flex";
    footEl.innerHTML="";
    var close=document.createElement("button");
    close.type="button";
    close.className="exam-dict-btn exam-dict-btn-primary";
    close.textContent="Đóng";
    close.addEventListener("click",hidePopover);
    footEl.appendChild(close);
    refreshPopoverLayout();
  }

  function setTitleForLookup(){
    if(!lookup)return;
    titleEl.innerHTML=esc(lookup.query)+'<span class="exam-dict-badge">Tra nhanh</span>';
  }

  async function fetchLookup(query){
    loading=true;
    lookup={query:query,kind:"word",senses:[],paraphrases:[],source:""};
    phase="lookup";
    setTitleForLookup();
    renderLookupBody();
    try{
      var res=await fetch("/api/reading/lookup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({q:query})
      });
      if(res.status===401){
        lookup={query:query,kind:"word",error:"Đăng nhập để tra từ khi đọc bài.",senses:[],paraphrases:[],source:""};
      }else if(res.ok){
        lookup=await res.json();
      }else{
        lookup={query:query,kind:"word",error:"Lỗi mạng hoặc máy chủ tra từ. Thử chọn lại cụm.",senses:[],paraphrases:[],source:""};
      }
    }catch(e){
      lookup={query:query,kind:"word",error:"Lỗi mạng hoặc máy chủ tra từ. Thử chọn lại cụm.",senses:[],paraphrases:[],source:""};
    }
    loading=false;
    setTitleForLookup();
    renderLookupBody();
    if(lookup&&lookup.kind==="word"&&!lookup.error){
      fetch("/api/reading/lookup/enrich",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({q:query})
      }).then(function(r){return r.ok?r.json():{paraphrases:[]};})
        .then(function(data){
          if(!lookup||lookup.query!==query)return;
          if(data.paraphrases&&data.paraphrases.length){
            lookup.paraphrases=data.paraphrases;
            renderLookupBody();
          }
        }).catch(function(){});
    }
  }

  function syncSelection(){
    var exam=document.getElementById("exam-screen");
    if(!exam||window.getComputedStyle(exam).display==="none"){hidePopover();return;}
    if(!isReviewMode()){hidePopover();return;}
    suppressHighlightPopoverInReview();
    maybeLoadSrs();
    if(popover.style.display==="flex"&&phase!=="lookup")return;
    var root=getDictionarySelectionRoot();
    if(!root){if(phase==="lookup")hidePopover();return;}
    var sel=window.getSelection();
    if(!sel||!sel.rangeCount||sel.isCollapsed){if(phase==="lookup")hidePopover();return;}
    var range=sel.getRangeAt(0);
    if(!root.contains(range.commonAncestorContainer)){if(phase==="lookup")hidePopover();return;}
    var text=normalizeSelectionText(sel.toString(),root);
    if(!text){if(phase==="lookup")hidePopover();return;}
    var parsed=parseReadingSelection(text);
    if(!parsed){if(phase==="lookup")hidePopover();return;}
    var rect=range.getBoundingClientRect();
    if(rect.width===0&&rect.height===0){if(phase==="lookup")hidePopover();return;}
    anchorRect=rect;
    positionPopover(rect);
    if(lookup&&lookup.query===parsed.query&&!loading)return;
    openedAt=performance.now();
    void fetchLookup(parsed.query);
  }

  closeBtn.addEventListener("click",hidePopover);
  if(backdrop)backdrop.addEventListener("click",hidePopover);
  document.addEventListener("selectionchange",function(){
    suppressHighlightPopoverInReview();
    clearTimeout(lookupTimer);
    lookupTimer=setTimeout(syncSelection,80);
  });
  document.addEventListener("pointerdown",function(e){
    if(popover.style.display!=="flex")return;
    if(performance.now()-openedAt<200)return;
    var t=e.target;
    if(!(t instanceof Node))return;
    if(popover.contains(t))return;
    if(backdrop&&backdrop.contains(t))return;
    hidePopover();
  },true);
  var pp=document.getElementById("passage-panel");
  if(pp)pp.addEventListener("scroll",function(){
    if(anchorRect&&popover.style.display==="flex")positionPopover(anchorRect);
  },{passive:true});
  var ts=document.getElementById("transcript-scroll");
  if(ts)ts.addEventListener("scroll",function(){
    if(anchorRect&&popover.style.display==="flex")positionPopover(anchorRect);
  },{passive:true});
  var qp=document.getElementById("questions-panel");
  if(qp)qp.addEventListener("scroll",function(){
    if(anchorRect&&popover.style.display==="flex")positionPopover(anchorRect);
  },{passive:true});
  window.addEventListener("resize",function(){
    if(anchorRect&&popover.style.display==="flex")positionPopover(anchorRect);
  });
})();
</script>`;
}

/**
 * @param {string} html
 * @param {"reading" | "listening"} [kind]
 */
export function injectExamDictionaryPopover(html, kind = "reading") {
  if (html.includes(MARKER)) return html;
  const chunk = buildDictionaryPopoverScript(kind);
  const bodyIdx = html.lastIndexOf("</body>");
  if (bodyIdx === -1) return html + chunk;
  return html.slice(0, bodyIdx) + chunk + html.slice(bodyIdx);
}
