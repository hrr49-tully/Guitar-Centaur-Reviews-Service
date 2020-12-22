const convertMonthToNum = (month) => {
  let result = month === 'Jan' ? 1 :
    month === 'Feb' ? 2 :
      month === 'Mar' ? 3 :
        month === 'Apr' ? 4 :
          month === 'May' ? 5 :
            month === 'Jun' ? 6 :
              month === 'Jul' ? 7 :
                month === 'Aug' ? 8 :
                  month === 'Sep' ? 9 :
                    month === 'Oct' ? 10 :
                      month === 'Nov' ? 11 :
                        month === 'Dec' ? 12 : null;
  return result;
};

const buttonClicked = (input, input2) => {
  document.getElementById(input).classList.add(styles.thumbsButtonClicked, styles.thumbsButtonClickedNumber);
  document.getElementById(input2).classList.remove(styles.thumbsButton);
  document.getElementById(input2).classList.add(styles.thumbsOppositeClicked);
};

module.exports = {
  convertMonthToNum,
  buttonClicked
};
