import tokenService from './tokenService';

const BASE_URL = '/api/rides/';

export function create(ride) {
    return fetch(BASE_URL + 'trip', {
        method: 'POST',
        body: ride,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
}

export function getAll() {
    return fetch(BASE_URL + 'trip', {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }