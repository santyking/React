import React, { useState } from 'react';

function PalindromeChecker() {
  const [inputValue, setInputValue] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    checkPalindrome(value);
  };

  const checkPalindrome = (str) => {
    if (typeof str !== 'string') {
      setIsPalindrome(false);
      return;
    }
    
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    setIsPalindrome(cleanedStr === reversedStr);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      {isPalindrome !== null && (
        <p>{isPalindrome ? 'This is a palindrome' : 'This is not a palindrome'}</p>
      )}
    </div>
  );
}

export default PalindromeChecker;
