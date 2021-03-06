import * as React from 'react'
import {useEffect, useState} from 'react'
import {get} from 'idb-keyval'

const Tabs: React.FC = () => {
  const [, setUserId] = useState('');

  useEffect(() => {
    // Get userId from cache(indexedDB)
    // Remove get('userId') or remove setUserId would solve the warning
    get('userId').then((result) => {
      setUserId(result)
    })
  }, []);

  return <div>Tabs</div>
}

export default Tabs
