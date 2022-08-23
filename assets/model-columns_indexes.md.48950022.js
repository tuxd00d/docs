import{_ as s,c as n,o as a,a as l}from"./app.f2aaab78.js";const C=JSON.parse('{"title":"Indexes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Composite Indexes","slug":"composite-indexes"}],"relativePath":"model-columns/indexes.md"}'),p={name:"model-columns/indexes.md"},e=l(`<h1 id="indexes" tabindex="-1">Indexes <a class="header-anchor" href="#indexes" aria-hidden="true">#</a></h1><p>A simple way to create an index or unique index for a table is just to add <code>index</code> or <code>unique</code> to the column definition:</p><div class="language-yaml line-numbers-mode"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">models</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">Post</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string index</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># Make an Index on the \`title\` column</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">slug</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string unique</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># Make a Unique Index on the \`slug\` column</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">longText</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-php line-numbers-mode"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#FFCB6B;">Schema</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">posts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Blueprint</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">();</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">();</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">slug</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">unique</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">longText</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">body</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">timestamps</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>You can also set a <a href="./primary-key#using-another-column-as-primary-key">primary key</a> this way.</p><h2 id="composite-indexes" tabindex="-1">Composite Indexes <a class="header-anchor" href="#composite-indexes" aria-hidden="true">#</a></h2><p>Additional and personalized indexes can be declared under the <code>indexes</code> key, even for <code>belongsTo</code> relations that may be costly for your table without an index. While you only need to issue a list of columns, you can also set the index name (especially if your SQL engine doesn&#39;t support large-named indexes) and the type if is not a normal <em>index</em>, like <code>unique</code>.</p><div class="language-yaml line-numbers-mode"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">models</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Post</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">slug</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">longText</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">author</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">belongsTo:User</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">timestamps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">indexes</span><span style="color:#89DDFF;">:</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slug id</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slug_id_index</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unique</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-php line-numbers-mode"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#FFCB6B;">Schema</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">posts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Blueprint</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">id</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">string</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">slug</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">longText</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">body</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">timestamps</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#FFCB6B;">Schema</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">table</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">posts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Blueprint</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">unique</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">slug</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">slug_id_index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>The indexes will be created in the migrations file, and executed <em>after</em> the table is created.</p><div class="tip custom-block"><p class="custom-block-title">Morphs are already indexed</p><p>Laravel migrations already create an index over the morph itself, so you don&#39;t need to declare an index over a <code>morphTo</code> relation.</p></div>`,11),o=[e];function t(r,c,D,F,y,i){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
