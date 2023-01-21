# 41. Verify Account UI

To make your account in a website, sometimes you need to verify your email ID. You will generate a code which is send to your email. The same *code* needs to verify in a form.

This is that *form*. All initial values are zero by default. As you enter digits in the space provided, color of that block's border become blue.

I added color, orange, for the next one also. Additionally, if you press *backspace*, the current digit become *zero* again with orange border in that block.

**Future work:** After *backspace*, active one is in blue border. That should be in orange. Need to correct.

### Important concepts for the project

1. -webkit-outer-spin-button CSS pseudo-element to style input element
2. -webkit-inner-spin-button
3. querySelectorAll()
4. focus()
5. addEventListener('keydown')
6. if...else
7. setTimeout(function, time in ms)
8. element.style.borderColor
9. arrow function
10. forEach()
11. .value
12. @media
