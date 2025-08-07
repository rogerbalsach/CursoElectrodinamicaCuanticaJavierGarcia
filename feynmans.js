// Complete Reference of Options: https://photino.github.io/jquery-feyn/manual/options.html
// Examples: https://photino.github.io/jquery-feyn/examples.html

var mathjaxDefined = (typeof MathJax !== 'undefined');
var feynmanDiagrams = {

  Feynman151: {
    width: 355, height: 110,
    incoming: {i1: '30,100', i2: '90,100'},
    outgoing: {i3: '30,10', i4: '90,10'},
    vertex: {v1: '60,40', v2: '60,70'},
    fermion: {line: 'i1-v2,v2-i2,i4-v1,v1-i3', arrow: true},
    photon: {line: 'v1-v2', amplitude: 3, period: 3},
    symbol: {
      a1: ['33,91', -45, 'arrow'],
      a2: ['87,91', -135, 'arrow'],
      a3: ['54,29', -135, 'arrow'],
      a4: ['66,29', -45, 'arrow'],
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      p1: ['29,62', '$p_1$', 20, 20],
      p2: ['78,62', '$p_2$', 20, 20],
      p3: ['45,0', '$p_3$', 20, 20],
      p4: ['62,0', '$p_4$', 20, 20],
      l: ['100,45', '$=i \\mathcal{M}(2 \\pi)^4 \\delta^{(4)}(p_1+p_2-p_3-p_4)$', 245, 20],
    },
    mathjax: mathjaxDefined
  },

  Feynman201: {
    width: 360, height: 110,
    incoming: {i1: '30,100', i2: '90,100'},
    outgoing: {i3: '30,10', i4: '90,10'},
    vertex: {v1: '60,40', v2: '60,70'},
    fermion: {line: 'i1-v2,v1-i3,v2-v1', arrow: true},
    photon: {line: 'v2-i2,i4-v1', amplitude: 3, period: 3},
    symbol: {
      a1: ['33,91', -45, 'arrow'],
      a2: ['87,91', -135, 'arrow'],
      a3: ['54,29', -135, 'arrow'],
      a4: ['66,29', -45, 'arrow'],
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      p1: ['29,62', '$p_1$', 20, 20],
      p2: ['78,62', '$p_2$', 20, 20],
      p3: ['45,0', '$p_3$', 20, 20],
      p4: ['62,0', '$p_4$', 20, 20],
      l: ['100,45', '$=i \\mathcal{M}_1(2 \\pi)^4 \\delta^{(4)}(p_1+p_2-p_3-p_4)$', 250, 20],
    },
    mathjax: mathjaxDefined
  },

  Feynman202: {
    width: 390, height: 110,
    incoming: {i1: '30,100', i2: '120,100'},
    outgoing: {i3: '30,10', i4: '120,10'},
    vertex: {v1: '60,40', v2: '60,70'},
    fermion: {line: 'i1-v2,v1-i3,v2-v1', arrow: true},
    photon: {line: 'v2-i4,i2-v1', amplitude: 3, period: 3},
    symbol: {
      a1: ['33,91', -45, 'arrow'],
      a2: ['117,91', -135, 'arrow'],
      a3: ['54,29', -135, 'arrow'],
      a4: ['92,29', -45, 'arrow'],
    },
    node: {show: 'v', type: 'dot', fill: 'red', radius: 2},
    label: {
      p1: ['29,62', '$p_1$', 20, 20],
      p2: ['108,62', '$p_2$', 20, 20],
      p3: ['45,0', '$p_3$', 20, 20],
      p4: ['88,0', '$p_4$', 20, 20],
      l: ['130,45', '$=i \\mathcal{M}_2(2 \\pi)^4 \\delta^{(4)}(p_1+p_2-p_3-p_4)$', 280, 20],
    },
    mathjax: mathjaxDefined
  },

};
