## MDDN 242 2024 Assignment 2

**GRIDLOCK** was created by using eight simple `line` functions, containing twenty different parameters that modify the position and length of each line.

Twenty parameters per letter:
  - `dLine1XPos` : ***x-axis position*** to draw **diagonal line 1** from
  - `dLine1YPos` : ***y-axis position*** to draw **diagonal line 1** from
  - `dLine1Length` : ***length*** of **diagonal line 1**
  - `dLine2XPos` : ***x-axis position*** to draw **diagonal line 2** from
  - `dLine2YPos` : ***y-axis position*** to draw **diagonal line 2** from
  - `dLine2Length` : ***length*** of **diagonal line 2**
  - `hLine1YPos` : ***y-axis position*** of **horizonal line 1**
  - `hLine1Length` : ***length*** of **horizonal line 1**
  - `hLine2YPos` : ***y-axis position*** of **horizonal line 2**
  - `hLine2Length` : ***length*** of **horizonal line 2**
  - `hLine2Shift` : ***x-axis shift*** of **horizonal line 2**
  - `hLine3YPos` : ***y-axis position*** of **horizonal line 3**
  - `hLine3Length` : ***length*** of **horizonal line 3**
  - `vLine1XPos` : ***x-axis position*** of **vertial line 1**
  - `vLine1Length` : ***length*** of **vertical line 1**
  - `vLine2XPos` : ***x-axis position*** of **vertical line 2**
  - `vLine2Length` : ***length*** of **vertial line 2**
  - `vLine2Shift` : ***y-axis shift*** of **vertical line 2**
  - `vLine3Length` : ***length*** of **vertical line 3**
  - `vLine3Shift` : ***y-axis shift*** of **vertical line 3**

___

### CHANGELOG & PROGRESS DOCUMENTATION

##### 25/03/24 - 31/03/24 *(Week 5)*

- Started working on `sketch.js`
- Experimenting with different parameters to add stems to lowercase letters 'a' and 'b'

___

##### 01/04/24 - 03/04/24 *(Week 6)*

- Continued experimentation, trying out an arabic-style typeface similar to [this one](https://www.dafont.com/img/charmap/a/l/alhambra0.png)
- This proved to be too difficult - creating curved line parameters that worked for each letter

___

##### 15/04/24 - 21/04/24 *(Week 7)*

- Testing out a new idea, initially aimed for a cryllic-style typeface but landed on an idea that loosely resembled a seven-segment LED, with a total of 8 drawn lines
- Experimented with a custom line function to draw a dotted path in place of a line
- [Completed initial draft of alphabet](https://raw.githubusercontent.com/tho888/new-parametric-letterforms-tho888/20e5330451f20b0df8cfafa50e68c02fa0d35801/preview.jpg)

___

##### 22/04/24 - 28/04/24 *(Week 8)*

- Consolidated variables to cut them down to 20
- Updated colours and fixed layering issues
- Adjusted variable names to be more intelligible

___

##### 29/04/24 - 02/05/24 *(Week 9)*

- Added typeface setup variables for font size, weight, and stroke cap
- Fixes for stroke parameters and interpolation
- Finalising design