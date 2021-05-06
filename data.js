export const articles = [
  {
    id: 5,
    authorName: "Linnéus Karlsson",
    title: "Laplace Transform of DC Circuits",
    summary: "When studying transient processes, like when a switch is changed, in electrical circuits we have to make us of the Laplace transform. Here is a quick rundown on how to Laplace transform the resistor, capacitor and inductor.",
    "text": "**When studying transient processes, like when a switch is changed, in electrical circuits we have to make us of the Laplace transform. Here is a quick rundown on how to Laplace transform the resistor, capacitor and inductor.**\n\nFirst we need to establish what happens when we Laplace transform the current and voltage. We can see the voltage and current as \"unknown\" functions dependent on time, therefore their Laplace transforms become:\n\n$$\n        \\begin{aligned}\n            & i(t) \\Rightarrow I(s) \\\\\n            & u(t) \\Rightarrow U(s)\n        \\end{aligned}\n        .\n$$\n\nSo lets start with the easy component: the resistor. We know from Ohm's law that:\n\n$$\n    u(t) = R i(t).\n$$\n\nIf we Laplace transform this we get:\n\n$$\n    U(s) = R I(s),\n$$\n\nsince the resistor is time independent. The inductor and capacitor is time dependent, so they get a little bit more trickier. First we need to see what happens when we apply the Laplace transform to a derivative of a function $f(t)$. The Laplace transform of an arbitrary function $f(t)$ is given by:\n\n$$\n    F(s) = \\int_{0-}^\\infty e^{-st} f(t) dt.\n$$\n\nThe $0-$ can be looked at more or less as what happened exactly before significant change happened to the function $f(t)$ (we'll get back to this). So lets preform the Laplace transform on $f'(t)$:\n\n$$\n    \\int_{0-}^\\infty e^{-st} f'(t) dt.\n$$\n\nWith a little partial integration we get:\n\n$$\n    \\bigg[e^{-st} f(t) \\bigg]_{0-}^\\infty - \\int_{0-}^\\infty -se^{-st} f(t) dt = - f(0-) + sF(s) .\n$$\n\nWith that out of the way lets preform the Laplace transform on the inductor first. We know that the potential over an inductor is given by:\n\n$$\n    u(t) = L \\frac{d i(t)}{dt}.\n$$\n\nSo with our knowledge of Laplace transforming a derivative we get the following:\n\n$$\n    U(s) = L (s I(s) - i(0-)).\n$$\n\nThe inductor is said to be energized if there is an initial current $i(0-)$. If there is no initial current we get a simpler relation of:\n\n$$\n    U(s) = sL I(s).\n$$\n\nWe can also rewrite the relation to get the current:\n\n$$\n    I(s) = \\frac{U(s)}{sL} + \\frac{i(0-)}{s}.\n$$\n\nWe can make circuit diagrams with these relations:\n\n![Image of Laplace transform of the inductor](https://i.imgur.com/IkgvQUe.png \"Laplace transform of the inductor\")\n\nNote the Thevenin/Norton equivalents under \"Initial current\".\n\nLets move on to the capacitor. The procedure of Laplace transforming the capacitor is the same as the inductor. The current through a capacitor is given by:\n\n$$\n    i(t) = C \\frac{du(t)}{dt}.\n$$\n\nSo the Laplace transform of the current is:\n\n$$\n    I(s) = C(sU(s) - u(0-)).\n$$\n\nWe can see here that if there is no initial voltage over the capacitor we get the simpler relation:\n\n$$\n    I(s) = sC U(s).\n$$\n\nLastly the the Laplace transformed voltage is:\n\n$$\n    U(s) = \\frac{I(s)}{sC} + \\frac{u(0-)}{s}.\n$$\n\nThe circuit diagrams then become:\n\n![Image of Laplace transform of the capacitor](https://i.imgur.com/za9EeTS.png \"Laplace transform of the capacitor\")\n\nAnd that is it! You now know how to Laplace transform the resistor, inductor and capacitor!",
    lastEdited: "2021-05-06 19:51:46",
    public: true,
    url: "laplace-transform-of-dc-circuits",
    author: 1,
    scienceSubject: "EC",
    scienceSubjectName: 'Electrical Circuits',
    thumbnail: "https://i.imgur.com/ugFW7vS.png"
  },
  {
    id: 4,
    authorName: "Linnéus Karlsson",
    title: "Couette Flow - Laminar Flow Past Two Plates",
    summary: "The Navier Stokes equation is famously known for being unsolvable if there is any turbulence in a fluid but there are certain scenarios where laminar flow exist and a solution for the velocity profile can be derived. One of these scenarios is flow past two plates either caused by one plate moving, Couette flow, or a pressure gradient.",
    text: "**The Navier Stokes equation is famously known for being unsolvable if there is any turbulence in a fluid but there are certain scenarios where laminar flow exist and a solution for the velocity profile can be derived. One of these scenarios is flow past two plates either caused by one plate moving, Couette flow, or a pressure gradient.**\n\nBefore solving these two problems we need to make some assumptions. First we assume that our fluid is incompressible and Newtonian so we can use the Navier Stokes equation and the mass continuity equation. Secondly, the flow has to be stationary (so all time dependent terms in the Navier Stokes equation is zero) and in one direction, the $x$-direction, so the velocity vector only has one component ($v=w=0$). The plates also has to be considered infinite. Lastly, the flow has to be laminar which has already been mentioned and the impact from gravity has to be considered negligible ($g = 0$).\n\nSo lets start with the case where one of the plates is moving. From our assumptions that fluid is Newtonian, stationary and goes in the $x$-direction we get the following mass continuity equation:\n\n$$\n    \\frac{\\partial u}{\\partial x} + \\cancel{\\frac{\\partial v}{\\partial y}} + \\cancel{\\frac{\\partial w}{\\partial z}} = \\frac{\\partial u}{\\partial x} = 0,\n$$\n\nwhere $u$, $v$ and $w$ is the velocity in the $x$-, $y$- and $z$-direction. It is then safe to assume that the velocity profile $u$ is only dependent on $y$ because the plates' areas are infinite. Now lets look at the Navier Stoke equation in all directions and see which terms we can cancel out because of our assumptions and the mass contuinity equation:\n\n$$\n    \\left\\{\n        \\begin{aligned}\n            & \\rho \\left( \\cancel{\\frac{\\partial u}{\\partial t}} + \\cancel{u \\frac{\\partial u}{\\partial x}} + \\cancel{v \\frac{\\partial u}{\\partial y}} + \\cancel{w \\frac{\\partial u}{\\partial z}} \\right) = \\cancel{- \\frac{\\partial p}{\\partial x}} + \\mu \\left(\\cancel{\\frac{\\partial^2 u}{\\partial x^2}} + \\frac{\\partial^2 u}{\\partial y^2} + \\cancel{\\frac{\\partial^2 u}{\\partial z^2}} \\right) + \\cancel{\\rho g_x} \\\\\n            & \\rho \\left( \\cancel{\\frac{\\partial v}{\\partial t}} + \\cancel{u \\frac{\\partial v}{ \\partial x}} + \\cancel{v \\frac{\\partial v}{\\partial y}} + \\cancel{w \\frac{\\partial v}{\\partial z}} \\right) = \\cancel{- \\frac{\\partial p}{\\partial y}} + \\mu \\left(\\cancel{\\frac{\\partial^2 v}{\\partial x^2}} + \\cancel{\\frac{\\partial^2 v}{\\partial y^2}} + \\cancel{\\frac{\\partial^2 v}{\\partial z^2}} \\right) + \\cancel{\\rho g_y} \\\\\n            & \\rho \\left( \\cancel{\\frac{\\partial w}{\\partial t}} + \\cancel{u \\frac{\\partial w}{ \\partial x}} + \\cancel{v \\frac{\\partial w}{\\partial y}} + \\cancel{w \\frac{\\partial w}{\\partial z}} \\right) = \\cancel{- \\frac{\\partial p}{\\partial z}} + \\mu \\left(\\cancel{\\frac{\\partial^2 w}{\\partial x^2}} + \\cancel{\\frac{\\partial^2 w}{\\partial y^2}} + \\cancel{\\frac{\\partial^2 w}{\\partial z^2}} \\right) + \\cancel{\\rho g_z}\n        \\end{aligned}\n    \\right. .\n$$\n\nAs you can see, a bunch of terms cancel out and all that remains is just one single expression:\n\n$$\n    \\mu \\frac{\\partial^2 u}{\\partial y^2} = 0 \\Rightarrow \\frac{\\partial^2 u}{\\partial y^2} = 0.\n$$\n\nSo if we integrate this expression twice we get:\n\n$$\n    u(y) = C_1 y + C_2,\n$$\n\nwhere $C_1$ and $C_2$ are constants. To determine these constants we have to use the no-slip boundary conditions of the plates. If we assume that the origin is located exactly in between the two plates we know that:\n\n$$\n    \\left\\{\n        \\begin{aligned}\n            & u(+h) = u_p \\\\\n            & u(-h) = 0\n        \\end{aligned}\n    \\right. ,\n$$\n\nwhere $h$ is the shortest distance from the origin to a plate and $u_p$ is the speed of the moving plate. This gives the constants:\n\n$$\n    \\left\\{\n        \\begin{aligned}\n            & C_1 = \\frac{u_p}{2 h} \\\\\n            & C_2 = \\frac{u_p}{2}\n        \\end{aligned}\n    \\right. .\n$$\n\nSo our velocity profile becomes:\n\n$$\n    u(y) = \\frac{u_p}{2} \\left(1 + \\frac{y}{h} \\right).\n$$\n\nThis solution is called the Couette flow which is named after the french physicist Maurice Couette. So what solution do we get if the two plates are stationary and we instead have a constant pressure gradient? The assumptions mentioned earlier are still the same so we get the same mass continuity equation. So lets see what cancels out in our Navier Stokes equations:\n\n$$\n    \\left\\{\n        \\begin{aligned}\n            & \\rho \\left( \\cancel{\\frac{\\partial u}{\\partial t}} + \\cancel{u \\frac{\\partial u}{\\partial x}} + \\cancel{v \\frac{\\partial u}{\\partial y}} + \\cancel{w \\frac{\\partial u}{\\partial z}} \\right) = - \\frac{\\partial p}{\\partial x} + \\mu \\left(\\cancel{\\frac{\\partial^2 u}{\\partial x^2}} + \\frac{\\partial^2 u}{\\partial y^2} + \\cancel{\\frac{\\partial^2 u}{\\partial z^2}} \\right) + \\cancel{\\rho g_x} \\\\\n            & \\rho \\left( \\cancel{\\frac{\\partial v}{\\partial t}} + \\cancel{u \\frac{\\partial v}{ \\partial x}} + \\cancel{v \\frac{\\partial v}{\\partial y}} + \\cancel{w \\frac{\\partial v}{\\partial z}} \\right) = - \\frac{\\partial p}{\\partial y} + \\mu \\left(\\cancel{\\frac{\\partial^2 v}{\\partial x^2}} + \\cancel{\\frac{\\partial^2 v}{\\partial y^2}} + \\cancel{\\frac{\\partial^2 v}{\\partial z^2}} \\right) + \\cancel{\\rho g_y} \\\\\n            & \\rho \\left( \\cancel{\\frac{\\partial w}{\\partial t}} + \\cancel{u \\frac{\\partial w}{ \\partial x}} + \\cancel{v \\frac{\\partial w}{\\partial y}} + \\cancel{w \\frac{\\partial w}{\\partial z}} \\right) = - \\frac{\\partial p}{\\partial z} + \\mu \\left(\\cancel{\\frac{\\partial^2 w}{\\partial x^2}} + \\cancel{\\frac{\\partial^2 w}{\\partial y^2}} + \\cancel{\\frac{\\partial^2 w}{\\partial z^2}} \\right) + \\cancel{\\rho g_z}\n        \\end{aligned}\n    \\right. .\n$$\n\nWe can see that the pressure gradient is zero in the $y$- and $z$-direction. So we get the following differential equation:\n\n$$\n    \\mu \\frac{\\partial^2 u}{\\partial y^2} = \\frac{\\partial p}{\\partial x}.\n$$\n\nWith some integration we get:\n\n$$\n    u(y) = \\frac{1}{\\mu} \\frac{\\partial p}{\\partial x} \\frac{y^2}{2} + C_1 y + C_2,\n$$\n\nwhere $C_1$ and $C_2$ are constants. The velocity at both plates are now zero because of the no-slip condition, so:\n\n$$\n    \\left\\{\n        \\begin{aligned}\n            & u(+h) = 0 \\\\\n            & u(-h) = 0\n        \\end{aligned}\n    \\right. .\n$$\n\nThis gives the constants:\n\n$$\n    \\left\\{\n        \\begin{aligned}\n            & C_1 = 0 \\\\\n            & C_2 = \\frac{1}{\\mu} \\frac{\\partial p}{\\partial x} \\frac{h^2}{2}\n        \\end{aligned}\n    \\right. .\n$$\n\nSo our velocity profile becomes:\n\n$$\n    u(y) = \\frac{1}{\\mu} \\frac{\\partial p}{\\partial x} \\frac{h^2}{2} \\left(1 + \\left(\\frac{y}{h} \\right)^2 \\right).\n$$\n\nThe velocity profile is a parabola with its maximum at the middle of the plates. \n\n![Image of pressure gradient flow](https://i.imgur.com/xIiH6ge.png \"Pressure Gradient Flow\")\n\nSo that is it, that is how you calculate fluid flow past two plates!",
    lastEdited: "2021-05-04 08:06:57",
    public: true,
    url: "couette-flow-laminar-flow-past-two-plates",
    author: 1,
    scienceSubjectId: "FD",
    scienceSubjectName: 'Fluid Dynamics',
    thumbnail: "https://i.imgur.com/qE3fYDO.png",
  },
  {
    id: 2,
    authorName: 'Linnéus Karlsson',
    title: 'The Falling Chimney',
    summary:
      'Why is it that a falling chimney breaks at a third of its length? Lets find out why!',
    text:
      '**The falling chimney problem is the perfect mix of mechanical dynamics and beam theory. By just using the fundamentals of those two fields we can accurately predict where the chimney cracks when falling, under some assumptions...**\n\nSo lets get the assumptions of the falling chimney problem out of the way first. The first assumption is that there is no air resistance. If air resistance had been present the top of the chimney would experience a greater stress from the air than the lower part which makes our calculations much more complex and this is not an article about fluid mechanics. The second assumption is that the chimney is homogeneous, meaning that it has the same diameter across its length and the same material. If it had been inhomogeneous certain parts would handle stress better than others.\n\nNow when that is out of the way, lets make some calculations! The first thing we\'ll have to determine is the angle acceleration $\\ddot{\\theta}$. To do that we use a beam\'s, in this case a chimney\'s, moment of inertia when attached at one of its ends:\n\n$$\n    I = \\frac{1}{3} m L^2.\n$$\n\nHere $m$ is the chimneys mass and $L$ is its length. The moment from the gravitation acting on the chimney must equal that of the angle acceleration:\n\n$$\n    mg \\frac{L}{2} \\sin{\\theta} = I \\ddot{\\theta} = \\frac{1}{3}mL^2 \\ddot{\\theta}.\n$$\n\nSo now we have our angle acceleration $\\ddot{\\theta}$ and apparently it is dependent on $\\theta$:\n\n$$\n    \\ddot{\\theta} = \\frac{3g}{2L} \\sin{\\theta}.\n$$\n\nIs this plausible? Well $\\ddot{\\theta}$ increases with $g$ and decreases with $L$ which makes sense. At $\\theta=0$ the angle acceleration is zero which also makes sense since at that angle the chimney is "standing up". If the chimney was locked and stationary at an angle $\\theta$ the load function would be:\n\n$$\n    w(d) = -\\frac{mg}{L} \\sin{\\theta}.\n$$\n\nIf we go to the other extreme and say that the chimney was in free fall it would lead to the load function being zero. So falling negates the load function and in our case the chimney is rotating. So $\\ddot{\\theta}$ has a similar effect to free fall. So the load function in our case will be the following:\n\n$$\n    w(d)=\\frac{dm}{L} \\ddot{\\theta} - \\frac{mg}{L} \\sin{\\theta} = \\frac{3dmg}{2L^2} \\sin{\\theta} - \\frac{mg}{L} \\sin{\\theta}.\n$$\n\nWe can see here that the load function is zero at $d = \\frac{2L}{3}$. This makes sense because $\\ddot{\\theta}$ is equal to $g \\sin{\\theta}$ at $d = \\frac{2L}{3}$. In other words, this point is in a "virtual" free fall. The relation between the load function and the shear force function is:\n\n$$\n    -w(d)=V\'(d).\n$$\n\nIf we integrate that we get:\n\n$$\n    V(d) = -\\frac{3d^2mg}{4L^2} \\sin{\\theta}+ \\frac{dmg}{L} \\sin{\\theta}+ C,\n$$\n\nwhere $C$ is a constant. We can determine this constant with the boundary condition $V(L) = 0$. In other words: the shear force is zero at the end of the chimney which is logical. This means:\n\n$$\n    C = -\\frac{mg}{4}.\n$$\n\nIf we take the absolute value of the shear force function we can check where the force is the greatest:\n\n$$\n    |V(d)|=\\left|mg\\, \\sin{\\theta} \\left(-\\frac{3d^2}{4L^2} + \\frac{d}{L} - \\frac{1}{4}\\right) \\right|.\n$$\n\nHere we can see that the shear force is the greatest when $d \\to 0$ on the interval $0< d < L$, so if the shear force was the cause of the crack in the chimney it would be at the base. But that is not the only place where the chimney can break... \n\nThe final step is looking at the bending moment function which has the following relation with the shear force function:\n\n$$\n    M\'(d)=V(d).\n$$\n\nSo with a bit of integration we get:\n\n$$\n    M(d)=mg\\, \\sin{\\theta} \\left(-\\frac{d^3}{4L^2} + \\frac{d^2}{2L} - \\frac{d}{4}\\right) + K,\n$$\n\nwhere $K$ is a constant. We\'ll once again use the boundary condition at the end of the chimney, which in this case is also zero. This leads to $K=0$. So where is $|M(d)|$ the greatest value? At $d=0$ the bending moment is zero so it is not there. Well lets check where its derivative, the shear force function, is zero to get the maximums:\n\n$$\n    M\'(d)=V(d)=0 \\Longrightarrow -\\frac{3d^2}{4L^2} + \\frac{d}{L} - \\frac{1}{4} = 0.\n$$\n\nFrom this we get the roots $d=L$ and $d=\\frac{L}{3}$. $d=L$ does not make much sense since its the end of the chimney, you cant real chop of something that isn\'t there... So we get $d=\\frac{L}{3}$ and that is why a falling chimney breaks at a third of its length from its base.\n\n<div style="position: relative;\n    padding-bottom: 56.25%; /* 16:9 */\n    height: 0;">\n<iframe style="position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;" width="560" height="315" src="https://www.youtube.com/embed/efjegZ6aWKI?start=149" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n</div>\n\nThe video above shows a demolition of a smokestack, as you can see it breaks close to a third of its length when it falls.',
    lastEdited: '2021-04-11 13:19:36',
    public: true,
    url: 'the-falling-chimney',
    author: 1,
    scienceSubjectId: 'MECH',
    scienceSubjectName: 'Mechanics',
    thumbnail: 'https://i.imgur.com/aI5x8Fu.jpeg',
  },
  {
    id: 3,
    authorName: 'Linnéus Karlsson',
    title: 'The Chemical Potential of an n-type Semiconductor',
    summary:
      'The chemical potential has different characteristics depending on the temperature. Lets calculate and understand the approximations of the chemical potential in an n-type semiconductor.',
    text:
      '**The chemical potential has different characteristics depending on the temperature. Lets calculate and understand the approximations of the chemical potential in an n-type semiconductor.**\n\nLets start with temperatures close to absolute zero. You have probably heard or read that the chemical potential must lie in the center between the donor level and the bottom of the conduction band because of charge neutrality. Lets do some math to find out why that is.\n\nLets use the variable $E_g$ for the bandgap energy, $E_d$ is the donor energy so the the donor level is situated at $E_g-E_d$. $\\mu$ is our desired chemical potential. $n$ is the electron density in the conduction band, $n_d$ is the donor density and $n_d^+$ is the density of the ionized donors. From the Fermi-Dirac distribution we know that the probability of an electron at the energy $E_g-E_d$ and the temperature $T$ is:\n\n$$\n    f(E_g - E_d) = \\frac{1}{e^{(E_g-E_d-\\mu)/(k_B T)}+1}.\n$$\n\nSo the donor electron density at the donor level is:\n\n$$\n    \\frac{n_d}{e^{(E_g-E_d-\\mu)/(k_B T)}+1}.\n$$\n\nEvery donor electron not at the donor level is at the conduction band so:\n\n$$\n    n_d^+ = n_d (1 - \\frac{1}{e^{(E_g-E_d-\\mu)/(k_B T)}+1}) = \\frac{n_d}{e^{-(E_g-E_d-\\mu)/(k_B T)}+1}.\n$$\n\nSince we are at low temperatures $T \\ll E_d/k_B$. This means $-(E_g-E_d-\\mu)/(k_B T) \\gg 1$ so we can make the following approximation (the 1 in the denominator is neglected):\n\n$$\n    n_d^+ \\approx n_d e^{(E_g-E_d-\\mu)/(k_B T)}.\n$$\n\nHaving low temperatures also means that the electrons at the valence band don\'t have enough energy to make an excitation to the conduction band meaning $n \\approx n_d^+$. But the electron density $n$ can also be expressed as:\n\n$$\n    n = \\frac{1}{\\sqrt{2}} (\\frac{m_e^* k_B T}{\\pi \\hbar^2})^{3/2} e^{-(E_g-\\mu)/(k_B T)} = n_0 e^{-(E_g-\\mu)/(k_B T)}\n$$\n\nhere is $m_e^*$ the effective mass of the electrons in the conduction band. Lets put the different expressions for $n$ at low temperature equal to each other to get the chemical potential:\n\n$$\n    n_d e^{(E_g-E_d-\\mu)/(k_B T)} = n_0 e^{-(E_g-\\mu)/(k_B T)}\n$$\n\nSo now we get the chemical potential:\n\n$$\n    \\mu = E_g - \\frac{1}{2} E_d - \\frac{1}{2} k_B T \\ln{(\\frac{n_0}{n_d})}.\n$$\n\nSo when the temperature approaches zero, $T \\to 0$, the chemical potential becomes:\n\n$$\n    \\mu = E_g - \\frac{1}{2}E_d,\n$$\n\nsince polynomial functions dominates over logarithmic functions ($n_0$ contains $T^{3/2}$) when it comes to limits. So that is how the chemical potential behaves at low temperatures, how about "medium" temperatures like room temperature? Well here we have more thermal energy to work with so pretty much every donor atom is ionized ($n_d^+ \\approx n_d$) but the thermal energy is still not big enough to excite a significant amount of electrons in the valence band so $n \\approx n_d$. This makes the math easier, we now have:\n\n$$\n    n = n_0e^{-(E_g-\\mu)/(k_B T)} = n_d,\n$$\n\nso:\n\n$$\n    \\mu = E_g + k_B T \\ln{(\\frac{n_d}{n_0})},\n$$\n\nfor "medium" temperatures. For high temperatures, like 1200 K, electron holes has manifested at the valence band and now plays the bigger role in the electron density in the conduction band. So now $n \\approx p$, where $p$ is the electron hole density at the valence band. The semiconductor is said to be in an intrinsic state, meaning that it can be seen as undoped. So now we have the following relation:\n\n$$\n    \\frac{1}{\\sqrt{2}} (\\frac{m_e^* k_B T}{\\pi \\hbar^2})^{3/2} e^{-(E_g-\\mu)/(k_B T)} = \\frac{1}{\\sqrt{2}} (\\frac{m_h^* k_B T}{\\pi \\hbar^2})^{3/2} e^{-\\mu/(k_B T)},\n$$\n\nwhere $m_h^*$ is the effective mass of the electron holes. This leads to the chemical potential of:\n\n$$\n    \\mu = \\frac{1}{2} E_g + \\frac{3}{4} k_B T \\ln{(\\frac{m_h^*}{m_e^*})}.\n$$\n\nThe chemical potential is located midway between the conduction band and the valence band if $m_e^* = m_h^*$.\n\nSo there we have it! We have now calculated the chemical potential for different temperature regions for an n-type semiconductor, although we did it with some significant approximations but without those this would get a lot harder if not impossible.',
    lastEdited: '2021-04-03 09:38:11',
    public: true,
    url: 'the-chemical-potential-of-an-n-type-semiconductor',
    author: 1,
    scienceSubjectId: 'SSF',
    scienceSubjectName: 'Solid-state Physics',
    thumbnail: 'https://i.imgur.com/d11wsMw.jpg',
  },
  {
    id: 1,
    authorName: 'Linnéus Karlsson',
    title: 'Energy of a Two Electron System',
    summary:
      'Calculating the energy of the stationary state of a two electron system gets quiet a bit more tricky than for a single electron system. In fact, calculating the Schrödinger equation is impossible. Luckily we have methods like perturbation theory and the variational method to estimate the energy.',
    text:
      "**Calculating the energy of the stationary state of a two electron system gets quiet a bit more tricky than for a single electron system. In fact, calculating the Schrödinger equation is impossible. Luckily we have methods like perturbation theory and the variational method to estimate the energy.**\n\nFirst we need to establish the Hamiltonaian for the system which is:\n\n$$\n    \\hat{H} = -\\frac{\\hbar}{2 m_e} \\nabla^2_1 - \\frac{\\hbar}{2 m_e} \\nabla^2_2 - \\frac{Ze^2}{4 \\pi \\epsilon_0 r_1 } - \\frac{Ze^2}{4 \\pi \\epsilon_0 r_2 } + \\frac{e^2}{4 \\pi \\epsilon_0 | \\vec{r}_1 - \\vec{r}_2 | }.\n$$\n\n$\\frac{\\hbar}{2 m_e} \\nabla^2_1$ is the kinetic energy for the first electron, same goes for the second. $\\frac{Ze^2}{4 \\pi \\epsilon_0 r_1 }$ is Coulomb's law between the atom core's charge $Ze$ and the first electron's charge $e$. Lastly we have $\\frac{e^2}{4 \\pi \\epsilon_0 | \\vec{r}_1 - \\vec{r}_2 | }$ which is Coulomb's law between the two electrons, this term is positive because the electrons repel each other.\n\nThe first estimation we'll do is having the two electrons not react with each other which means that the Coulomb's law term between them is zero. Then the combined wave function of the system is the following:\n\n$$\n    \\psi_+ (\\vec{r}_1, \\vec{r}_2) = \\psi_{100}(r_1) \\psi_{100}(r_2),\n$$\n\nwhere\n\n$$\n    \\psi_{100}(r) = \\frac{Z^{3/2}}{\\sqrt{\\pi} a_0^{3/2}} e^{Zr/a_0}\n$$\n\nis the wave function of a single electron system, $a_0$ is the Bohr radius. So our wave function of the two electron system is\n\n$$\n    \\psi_+ (r_1, r_2) = \\frac{Z^{3}}{\\sqrt{\\pi} a_0^{3}} e^{Z(r_1+r_2)/a_0},\n$$\n\nwhich leads the stationary state energy of:\n\n$$\n    E = 2Z^2 \\cdot (-13.6 \\text{ eV}).\n$$\n\nBut that is not so satisfactory nor a good estimate, which leads to our second estimation method: perturbation theory. Lets use the first order correction to estimate the impact that Coulomb's law between the two electrons has on the energy:\n\n$$\n    E^{(1)} = \\langle \\psi_+ | \\frac{e^2}{4 \\pi \\epsilon_0} \\frac{1}{|\\vec{r}_1 - \\vec{r}_2|} | \\psi_+ \\rangle = \\frac{5}{4} Z \\cdot 13.6 \\text{ eV}.\n$$\n\nSo now our estimated stationary state energy is:\n\n$$\n    E = 2Z^2 \\cdot (-13.6 \\text{ eV}) + \\frac{5}{4} Z \\cdot 13.6 \\text{ eV}.\n$$\n\nBUT WAIT! Lets try getting an even better estimation with the varational method. If we change the atom number $Z$ to a parameter $\\alpha$ we get:\n\n$$\n    \\psi_0 (r_1, r_2) = \\frac{\\alpha^{3}}{\\sqrt{\\pi} a_0^{3}} e^{\\alpha (r_1+r_2)/a_0}.\n$$\n\nWe now use this wave function as the base to calculate the expectation value of the Hamiltonian:\n\n$$\n    E(\\alpha) = \\langle \\psi_0 (r_1, r_2) | \\hat{H} | \\psi_0 (r_1, r_2) \\rangle = (-2 \\alpha^2 + 4 Z \\alpha - \\frac{5}{4} \\alpha) \\cdot (-13.6 \\text{ eV}).\n$$\n\nHere we can see that if we choose $\\alpha = Z$ we get the same result as for the first order correction perturbation theory. The variational method says $E_\\text{ground} \\leq E(\\alpha)$ so lets check where the minimum of $E(\\alpha)$ is:\n\n$$\n    \\frac{\\partial E(\\alpha)}{\\partial \\alpha} = (-4 \\alpha + 4Z - \\frac{5}{4}) = 0 \\Longrightarrow \\alpha = Z - \\frac{5}{16}.\n$$\n\nSo our estimated stationary state energy with the variational method is\n\n$$\n    E_\\text{ground} = (Z-\\frac{5}{16})^2 \\cdot (-13.6 \\text{ eV}).\n$$\nFor example, the estimated stationary state energy with the variational method for helium ($Z=2$) is $-77.5$ eV which is close to the experimental value of $-78.975$ eV, in other words this method of estimation works very well! You now know a couple of methods to estimate the stationary state energy for electrons!",
    lastEdited: '2021-03-23 17:35:14',
    public: true,
    url: 'energy-of-a-two-electron-system',
    author: 1,
    scienceSubjectId: 'QM',
    scienceSubjectName: 'Quantum Mechanics',
    thumbnail: 'https://i.imgur.com/u3yBTLv.jpeg',
  },
]
