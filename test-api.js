console.log('Script started, PID:', process.pid);
console.log('Node version:', process.version);
console.log('fetch type:', typeof fetch);

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 45000);
console.log('Calling API...');
const start = Date.now();

fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions',{
  method:'POST',
  signal: controller.signal,
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Bearer 98e39af8bbb94130b8b01fb9b14b08af.cOWpeP6rutVgBfzz'
  },
  body:JSON.stringify({
    model:'GLM-4.5-Air',
    messages:[
      {role:'system', content:'Translate to English only, no Chinese.'},
      {role:'user', content:'Translate: 你好世界'}
    ],
    temperature:0.1,
    max_tokens:100
  })
}).then(r => {
  clearTimeout(timeout);
  console.log('Response:', r.status, 'after', Date.now()-start, 'ms');
  return r.text().then(t => console.log('Body:', t.substring(0,300)));
}).catch(e => {
  clearTimeout(timeout);
  console.log('ERROR after', Date.now()-start, 'ms:', e.name, e.message);
  console.log('Stack:', e.stack?.substring(0,200));
});