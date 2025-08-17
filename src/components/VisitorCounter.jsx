import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc, serverTimestamp, increment } from 'firebase/firestore';

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState({ count: 0, lastVisit: null });

  useEffect(() => {
    const analyticsRef = doc(db, 'analytics', 'visitors');

    const updateVisitorCount = async () => {
      const docSnap = await getDoc(analyticsRef);

      if (docSnap.exists()) {
        await setDoc(analyticsRef, {
          count: increment(1),
          lastVisit: serverTimestamp(),
        }, { merge: true });
      } else {
        await setDoc(analyticsRef, {
          count: 1,
          lastVisit: serverTimestamp(),
        });
      }
    };

    const getVisitorData = async () => {
      const docSnap = await getDoc(analyticsRef);
      if (docSnap.exists()) {
        setVisitorData(docSnap.data());
      }
    };

    updateVisitorCount();
    getVisitorData();
  }, []);

  return (
    <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
      <p>Total Visitors: {visitorData.count}</p>
      {visitorData.lastVisit && (
        <p>Last Visit: {new Date(visitorData.lastVisit.seconds * 1000).toLocaleString()}</p>
      )}
    </div>
  );
};

export default VisitorCounter;