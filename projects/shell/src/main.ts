import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
	loadRemoteEntry({
		remoteEntry: 'http://localhost:3000/remoteEntry.js', 
		type: 'module'
	})
])
	.catch((error) => console.error(error))
	.then(() => import('./bootstrap'))
	.catch(err => console.error(err));
