export const fetchGet = async () => {
  const res = await fetch("https://httpbun.com/get");
  return res.json();
}

export const fetchPayload = async () => {
  const res = await fetch('https://httpbun.com/payload', {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({
      hello: 'world'
    })
  })
  return res.json();
}

export const fetchError = async () => {
  console.log('fetchError');
  const res = await fetch('https://httpun.com/status/400');
  return res.json();
}

fetchError().then(res => {})