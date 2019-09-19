import React from 'react'
import { connect } from 'react-redux';
import { Table, Icon, Divider, Progress } from 'antd';


const columns = [{
  title: 'Name',
  dataIndex: 'ip_address',
  key: 'ip_address',
  // render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'usage',
  key: 'usage',
  render: (text, record) => (
    <span>
    	<Progress percent={text} showInfo={false} />
    </span>
  ),
}, {
  title: 'Address',
  dataIndex: 'first_name',
  key: 'first_name',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
		<Icon type="setting" />
    </span>
  ),
}];

const data = [{
  "id": 1,
  "first_name": "Giovanna",
  "last_name": "Jouen",
  "email": "gjouen0@studiopress.com",
  "gender": "Female",
  "ip_address": "233.127.106.85",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKsSURBVBgZBcFLiJZlGADQ87zfN/N7GSe7UBiIEmUaRKRJRogGpmEmRglRCIZEi2oTRbuojQQRdDGVCDICN4ELISMoJG/jhNm9DLOyMLMyLSXHme9/n86JzHTns3vWTx7uPVTCAkxCgEAGWXW1Hjt7Oj+Kf888vXfLqnGAyEwrN+7f+84TC+aVEtOTRgKQCenP8xO2Hzrr918u/vft10cu27dl1UVooTRx/WDbTP/mD02JIMhKP6uuSxcm+pZeN82tc1qj9c8pWeeeWfL4e5d+vOnuiwUiYigzm8GmGCi0QVNoggiKQDVjeNCqhTPMvrY3uR2e+hYUSAIKSlAilAglQolQmnDy7wtmDU244bLwyG2XawaatdACZNI2hJARaj8poW0YzOKH02m8dmodt/ianmhLBy1kkmijSCkRJQSykk1hkFJDrY1UiAJaSFREEEIikZWBBhBF9EOWVJEJtFA7MqkIZCYoBTW0TZLh1PHvvfvGC4aGhsycmJi0bt3mewrUmjKTJDMBSCCEU8eP2rtzm4WLFnvx5U2OXb1hrNfrvd1Cv9JPslIBJKjJrz8e8eGON82bf7ublqzx6Ib1+jGnPXnm5GALtUs103OfjQupBplB5ZLTX5j2+XbdrEV2TV/l1XVrPP7gaqMHR9rfum52C13X1+8zY3jA/CuLmvSTs9+P+Gr3Vj9NusryFQ849NgKy+6+3yejI74cWDv26QcrTxToLtba1ZrjfUZO9I2c7Iz+3nf0/W0Onxvir589v2ymW1av9893B7y2eWudyLaDFibG+qemDjZXPHPj+NTMLJKK+w4dtvvjA86fO+fg/j127dzhlde31sm9gXP9rp6AFiLypeVP7bk3Im5OOQUgFmw0c9bcXq/lrjsWxnfTHh5b+uS+sVrr4bbYDv8DSZ8/CcPtqE4AAAAASUVORK5CYII=",
  "location": 7.3832138,
  "usage": 10
}, {
  "id": 2,
  "first_name": "Sarette",
  "last_name": "Binstead",
  "email": "sbinstead1@gov.uk",
  "gender": "Female",
  "ip_address": "71.54.125.177",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIsSURBVDjLpVMxbBJhFH6HR1sKNG01jbkEGYgDjMLk0GgYiZODBEZ1cHDASAJMLiwkspAwECRMOhkhcXNwUTGmZWhs0RqtXmutBrGDHoT7//987wfaQrv1T77/3d3/3nff++6dYlkWnGaptOVyOR2JPIhWKpUKTCal0+mXpmleEUK08vl84BgBLk8kEoF6ve5/tmJYggOQLooCY7fbhVgsBpVKxX+iAs55s1arXXLMLcHirE0WWbgJZKEO585dgFKpBIyx15MEysiDp+8M66zLJgvEEch7JNvdF3Dr6qxyogJao8Q3z4vQ+bUD6owbLl+7C/YZ1+CMC5kXDodX0I8gYrXRaIRsIwLZLya293SIRqPw++cOrG+3Ye1bB9a22rD3Zx8ePNGtXq8XzGQy5EtwTAHDYo6wO+ahWCzCmSknLLlVmHbYgSOzwEOKzgUNkskkoILmgQeJRELKcs6fh+Xr9+E9vlVbmMKWsBD7IvUcN04kiM3vBhTuXJR+yBZITjwehx/6Jux22CBZWDIyhuoYRQvYkMA0D4dPEmBfzUKhIOPtsEsxKZGKOBUJCT4iGcaxr1CtVoNHP83gbYeSDzwYXjPGj8/BaIVCIb3f73vcixrcuPdIFpIS8oOjH48f3oQvG29p+FqoOGCbHAx86Mlms+jHJ/i4bcAH/R/CgI2vf6G1ZcDn9QaUy2WaSv9wgKwx+Hy+Va/XKzRNa0yeEVRVfaEoCsl+RffKaX/n/x+oi531jRZtAAAAAElFTkSuQmCC",
  "location": -7.3194701,
  "usage": 49
}, {
  "id": 4,
  "first_name": "Hali",
  "last_name": "Pane",
  "email": "hpane3@meetup.com",
  "gender": "Female",
  "ip_address": "243.199.119.16",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJFSURBVDjLpZPNS1RhFMZ/5733zkzjR/ZBCUpoJdUiBCkll4m0CUKJIGpVSLjyL2gntDFop6shAolWbcSNIW0ircHBUHCloo3VjNY0jjP3831bWA5ai8Bnfc7vPOfhHDHGcBjZAENji7N1cSj7IcdqY2zkKoiC2qSFNsKPYoXpTPbBynj/4j8BlbLL9c4L3OqoZWLmM4/vXdpX9OJtHq0lBXQdBIgxhvtPZmZ7ui+yspZrjwKfWExxtMbh66YLAgj4geZnyd2YzmT7Vsb75/c5UEqwDLgVl55r57hxuYY3c18Y6mtDgO1KSBBETMwV0VpeA2f3ARKOwvUCcgWX9bzH0NhqvC4Okx9zBzNpPdGQ4OHIrJnOZLtWxvs/2AChNnhRiFIKy8j/ZjILiALYLgc4YnO8zsJSIWUv4Pt2CMBU+tteoxtC0YN8wUdEV1eItMHCIdSagru5l0kQaZ4OdqC1wQAWhqQNnudR3PGrANu2aGmE9FJATSxJwinhegHDr1ZRAmGk0ZHGAMYYMJB0dh0ogOVs6VNqcoGtosYv1+9lYikHERvBQsQCozBGCMIQ3w+rDtKjvQMAd4bfL59vFqYzQasjNoM36wi1vzvHgBFNwo4x8nKNreJOFfBHy9nSXGpyoSPSYOGgqZCae8TJ5BkERb68zsDVZygSlD3/b0B6tPf2byempRFO127T095JQ6wJFBTcJk7VhCRjYItUT/mgrgxOvWtrPtLdEG8gYdcT6gDRGjERWsosrS2TKwbMP78rcth3/gX/0SEvLZFG1QAAAABJRU5ErkJggg==",
  "location": -27.6146187,
  "usage": 71
}, {
  "id": 5,
  "first_name": "Tabbitha",
  "last_name": "Reis",
  "email": "treis4@sohu.com",
  "gender": "Female",
  "ip_address": "155.48.57.223",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGkSURBVDjLrZJPKINhHMd3UsrJTcpBDi6UC+3ookQ5OOBAaCh2cFQ40GqTzURTihI54DRp8dqBg3BQw5BtNmxe/4flT9re5+v3vJvF2l6Kp749Pe/7fj7P7/09jwqA6i9R/ZugVr+cSZmlvFOgEIGSl0xgnVt3IRyRoDSWtn1c4qakxQW0yKBEJMbw+MpwHWIQnxgCDwxnQQbvHYP7RoLnJirvntrkkuKvghytZU1+eUWg+MjgJ/j0nuEkBh9dSTgQo4KB+R0uqEgquCD4PBiDbxlc11HYSfBuILUg/gu8fB/t6rmVcEzw4aWEfYIdAS6IyILe6S0uUCdtIpd8Hbwah1+SxQlNTE91jJHPI5tcPoiLrBsL6BxrQOtQFep0pc/lXYU9P14kkngugy/onxlF30ITlpwWOEQB5tV21JgLUNKRZVSCTeM2J6/kuV5fFrbuD8N6OCJXY7S3wGxv44K3VHAuxUvR8HVldxFszolvvVncs3DB7+67Wpv9Nig0Qy80yrB+pVG5gsTQh7pqYz5Mgkbemc98rdiDJBIDJcTLjs0G/vwDCw/6dFwBuzsAAAAASUVORK5CYII=",
  "location": 30.718837,
  "usage": 65
}, {
  "id": 6,
  "first_name": "Bobbie",
  "last_name": "Coleman",
  "email": "bcoleman5@xrea.com",
  "gender": "Male",
  "ip_address": "23.231.240.48",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALPSURBVDjLhZJvaJV1FMc/v7tnc1e9Cs6Jl9oNFWmtOU2lzTbxX2CWohLthYq+FImolHrhm6SgF77yRSNfFIJRvQgssEgwNkipRpG6FP+1ze6cbvdud+4+9z7/n3N6cVsrmHrgy4FzDh++h3NQVR6nDefXndxwrv2WqtLc3aKbT7fVTfUSPCQ2d3es2PLD+m6AwA67cqX88jcPb93pZm3qviq3Ts0ZVZ0RsOn7FxbGSl7KYdIOAzc99wmKI+Oc2HOMgTN9fNjb9VK4dG55Rgcbv1vX0rPtpzG36Bzonxh2333mIEeW72FjQxutH7yMNs8hms25mtrqUzM6WP91m/qufzgOq955q+VA+v7o79wp5ekr5Ohs3MFHZz+l7oZkfj6bHTI3v117uXZeU5Mx02b6/JI5dL3XOvTsXpJhgX47R+/oPTqXtlNtCV/+9gt/FYaY7ybftowmGhs6TlUbY0ABlAZjqL++hkxqEZeGB7g2VmDvsi1cuneBlU+1Uy441LpmhYj8YRGphwSz/JGPiYMqSMzDmBSvPr2dby734JiIbemV/Jn7lbWZV3jv8xO83rRg5P0jd68CxiI0CZWAOKhBRRE3i5sfZF9pgtf8kcpOQ2OVXDzD1tUZgMVL9md6Bk9nN1kYrZXIpXw/hz/ajwQOVbPm8+T2TzAYuq+cJ/dgHCdwaUwvo/25XdzuaoWINwAswgRWchH1bUcBAVVUbKLiRcQbpGOxj9Y7DE+M8eONCzQvWQXA4BfZq/8AVDX2EKcPjSfR2Ea8O6CCigfiolIiPcejc1WSZDJJ7j8nt/BRlQgJ82g0WYGIDxqB+qg4aFxGIhuNbTDmfz9jEagaYjQqoNGDiuLJaVhko3ERjcuoeIifBfD+BWggE5EzPjss1aSQVEK1GiQFuhCNfSBAE5VsEjGx56kG4k8DPP/4wMndz6O8iCHFo0IBczFA9LOp0t/gFKTUltQw1wAAAABJRU5ErkJggg==",
  "location": 6.2244851,
  "usage": 94
}, {
  "id": 7,
  "first_name": "Tamas",
  "last_name": "Spofforth",
  "email": "tspofforth6@cocolog-nifty.com",
  "gender": "Male",
  "ip_address": "17.83.217.68",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK/SURBVDjLbZNNaFRXFMd/72U+dDLNRItGUSeJiagTJ6IQhdhaWoopFCJiF10UBAXpSlHcddHi0oUbkXYRFURE/NiIIjSkpCpdtGoTJG20iUMsMZJokhmqee/de8/p4jmDggcuFw73/s7/nPu/nqrSe/hch6peUZhD6VYUVUCVeNPaEmcwYbn06/nv1gIkiA8cVNhQLOS96ZkyqtVLEMMEFZgvv2IhVEQTrbyJGAA7i4U13qeda8ivLKIxAVGJq0pcfVljhsyiBDt2f8s7AFSXFDuauXVvjLm516gIAFJVoYqKMl95TRBGvB1vWsBLpBKs29RMe9NSnANVQURxTnEiWFEWAsPlq4PvAyjOCRPTFVJ+kiAIMGGElThvqSORTFFID3Oy+xfqdnUyfLZHvWByX3UGiBOsM4RhyJ5t7bH8WB2qyp27fWxLP2dx8RtyrVuYL61n9Oe+EzUFxgnOWKzzuTD4F6GxWKc4K7Sk/2DPpjINuR3Mjv9Nyov4oGEF2Q/zuRrAWiEyhkhA/TReMgm+sjr1gL0bZ2lc20M4dYlUxmNiaBQTRC+Dhf+6q0PEWIcNLKFxWCcYJ6zkPl93lMi19RJM/oSfsiSzzQSzI4j1P+862v/YrylwggkNoXEExrGkfJuv2sbJtfcSTP6InzRElRaeDtzj+4EGth7tHwLw327BRDGgsXKXL/LPWN7xJdHzPupSSlhpZur2fX4Y+Yyx+XTtGf2qYSLrsKGl/lk/vflphFVMPTyFEPBqdhWlwYdcW3SYF1H2vUaKDRM5CjpA4aMzPLp0jMd3fiOd30x5ZoqbyYNkMktRxhCRp+8oUFXwfbq2d/JofIZo5Aatmz+mvn49//75D0NNh8g2tWGtoAphENbs6Kkqn+w/3afKAUVZ8eQ4W1uX0bWhhYmonqulTuZMtvYzUa7/fvHI7irgf/y+taODWkwAAAAAAElFTkSuQmCC",
  "location": 23.105394,
  "usage": 54
}, {
  "id": 8,
  "first_name": "Darcey",
  "last_name": "Garrett",
  "email": "dgarrett7@army.mil",
  "gender": "Female",
  "ip_address": "195.169.154.145",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGnSURBVDjLxVM9T8JQFD2lBRQRFPAjEhIwXRgwEUjERRMnZPYXuPoHSJz8BQ7+BCcHJzZHiST4MWC0fsQBJUKCEQnGWihtfa/QBgK6MHiT2/tu3+1559x3y2iahlHMghFtZACuUqmkSdyiiaqqoJJo7HVFUQZi1w+Zcrnc9vl8LAXo7YexHhaNdaFQUDiSsFarFftXClriJz4eTqHJX7DMhDEbiiDlfALP80if1CFKLYjfxCUZR9s8ZcByvadG7w/QLl/guVRC8U2Etnutv5dlGXvr44S+3ZRFjcrgjEQvnFvG2pIfGzYOZ5c3KLCsWZjNZvual0wmOwD0oX/cVnFeXQDHfcDpcuGqtYJaTQKcHYBEImGebrDuY1AvPWImtIhjLoraSwtjHhvmv17Nwnw+/zcD/0QDt+9TUD1TmJ6zQWpImFTfyM64XhiLxdAr17h2E2Bnc9XcEEURzWaTFARM2na7HW63+3eAEul8tVqF1+tFMBiEw+EYmDpBEFAsFhEIBBCJRHQAhgyDQEDCFCgejzO5XE4bNn2Gp1IpJpPJaF05d8y//40/Nlww9OOVWvkAAAAASUVORK5CYII=",
  "location": 18.9351075,
  "usage": 36
}, {
  "id": 10,
  "first_name": "Ninon",
  "last_name": "Liddel",
  "email": "nliddel9@google.ca",
  "gender": "Female",
  "ip_address": "102.24.62.112",
  "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKOSURBVDjLlZPtS1NhGMb3D8y/xY+FwQKXr4mWFYT2wQhNQqEXKohIlNLIT2NNxLLYVtAiGIGSL9nm1lTmW3rczpk7287cdNTci9vU7Wy7Os9DR3J+qQMX93Nu7ut3nvt+nqMAoPhbDoejwmKxaKemppbHxsZ+mc3muMlk4oxG49A7w9DZ0vqjhdPpVEpmnWTOBYNBxGIx7O3tIZPJIJlMwu12YejlU3FY12fQagbKjgH+mL/wPI9isYiDgwMQiCAIiEajyOfzKOb3Ie5zsEy/x4vnD2wD/Y/LjgDky8Scy+VAHlEUQd69Xi8SiQSFZve3cZh2oXC4icnxt+h90mWgAMl8Stp2IZ1OU0MqlaKQcDgMlmVB8vm8iEySRTbtprvISbpz+2bh3t1bFQrJrNva2gIRx3HURHomoJ2dHbrOHiYlACMZg9J6V9phFjabDR0dHTpFeXk5/lVkNgQcj8fh8/nQ1ta2SgEMw8Dj8cBut0Ov19NiEkOhEM3LOTJYv9+PQCCASCSClpaWKAWQItlEIEQkJ+fl6NjwY4HxUrHCNi40X9k9ASCSzaUAKyNgdiMIuzuEiUUWNY2XXCdakEEklrYws8pj5gePuc0IXn0cR835xpH/GqJr049vaz4sCXGoztUV1FXVp+lF0mg0OqvVikhCOsrwGlzCCtZ9i1jxLGCJdWDR/R0enqMDFCJR9Gtfo7K6buToJg4ODir7nvVOf/hshO+nm0IIYNkzjyVujkJYP0OPb3R0FJXqqkmVSqU89jP19PQoHz66P9LZ3S6aJ0yYX5+lkDXeCfvyVxg/vUFtXW1OrVbrZPMxgKzu7q4z7Z03hq9db2UuX70Ya2puiDU01TP1DbXDkrmitP43h3Pjic5IKdYAAAAASUVORK5CYII=",
  "location": -1.9367459,
  "usage": 87
}];


class SimpleTable extends React.Component {
	render(){
		return (<Table columns={columns} dataSource={data} pagination={false} />)
	}
}


function getState(state){
	return {
		state: state
	};
}

export default connect(getState)(SimpleTable);