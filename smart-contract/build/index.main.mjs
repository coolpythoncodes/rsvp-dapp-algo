// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  return {
    checkin: [ctc0, ctc1],
    register: [ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Object({
    deadline: ctc0,
    host: ctc1,
    name: ctc2,
    reservation: ctc0
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc4
    });
  const map0_ctc = ctc6;
  
  
  const Info_details = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v740, v743, v744, v745, v758, v759] = svs;
      return (await ((async () => {
        
        
        return v740;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_howMany = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v740, v743, v744, v745, v758, v759] = svs;
      return (await ((async () => {
        
        
        return v759;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_reserved = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v740, v743, v744, v745, v758, v759] = svs;
      return (await ((async (_v754 ) => {
          const v754 = stdlib.protect(ctc1, _v754, null);
        
        const v755 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v754), null);
        const v756 = {
          None: 0,
          Some: 1
          }[v755[0]];
        const v757 = stdlib.eq(v756, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v757;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        details: {
          decode: Info_details,
          dom: [],
          rng: ctc3
          },
        howMany: {
          decode: Info_howMany,
          dom: [],
          rng: ctc0
          },
        reserved: {
          decode: Info_reserved,
          dom: [ctc1],
          rng: ctc4
          }
        }
      },
    views: {
      3: [ctc3, ctc0, ctc0, ctc1, ctc4, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Object({
    deadline: ctc3,
    host: ctc4,
    name: ctc5,
    reservation: ctc3
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc9 = stdlib.T_Data({
    Guest_register0_85: ctc7,
    Host_checkin0_85: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v732 = stdlib.protect(ctc6, interact.details, 'for Admin\'s interact field details');
  
  const txn1 = await (ctc.sendrecv({
    args: [v732],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v740], secs: v742, time: v741, didSend: v31, from: v739 } = txn1;
      
      ;
      const v743 = v740.reservation;
      const v744 = v740.deadline;
      const v745 = v740.host;
      const v748 = await ctc.getContractInfo();
      
      const v758 = false;
      const v759 = stdlib.checkedBigNumberify('./index.rsh:49:56:decimal', stdlib.UInt_max, '0');
      const v760 = v741;
      
      if (await (async () => {
        const v775 = stdlib.eq(v759, stdlib.checkedBigNumberify('./index.rsh:55:45:decimal', stdlib.UInt_max, '0'));
        const v776 = v758 ? v775 : false;
        const v777 = v776 ? false : true;
        
        return v777;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v740], secs: v742, time: v741, didSend: v31, from: v739 } = txn1;
  ;
  const v743 = v740.reservation;
  const v744 = v740.deadline;
  const v745 = v740.host;
  const v747 = stdlib.lt(v741, v744);
  stdlib.assert(v747, {
    at: './index.rsh:43:16:application',
    fs: [],
    msg: 'too late',
    who: 'Admin'
    });
  const v748 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v748), {
    at: './index.rsh:44:32:application',
    fs: ['at ./index.rsh:44:32:application call to [unknown function] (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:44:32:application call to "liftedInteract" (defined at: ./index.rsh:44:32:application)'],
    msg: 'launched',
    who: 'Admin'
    });
  
  let v758 = false;
  let v759 = stdlib.checkedBigNumberify('./index.rsh:49:56:decimal', stdlib.UInt_max, '0');
  let v760 = v741;
  
  let txn2 = txn1;
  while (await (async () => {
    const v775 = stdlib.eq(v759, stdlib.checkedBigNumberify('./index.rsh:55:45:decimal', stdlib.UInt_max, '0'));
    const v776 = v758 ? v775 : false;
    const v777 = v776 ? false : true;
    
    return v777;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v831], secs: v833, time: v832, didSend: v608, from: v830 } = txn3;
    switch (v831[0]) {
      case 'Guest_register0_85': {
        const v834 = v831[1];
        undefined /* setApiDetails */;
        const v839 = v758 ? false : true;
        stdlib.assert(v839, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:57:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:42:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
          msg: 'event started',
          who: 'Admin'
          });
        const v841 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v830), null);
        const v842 = {
          None: 0,
          Some: 1
          }[v841[0]];
        const v843 = stdlib.eq(v842, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v843, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:58:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:42:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
          msg: 'already registered',
          who: 'Admin'
          });
        ;
        const v864 = stdlib.lt(v832, v744);
        stdlib.assert(v864, {
          at: './index.rsh:62:48:application',
          fs: ['at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
          msg: 'too late',
          who: 'Admin'
          });
        await stdlib.mapSet(map0, v830, true);
        null;
        const v865 = null;
        await txn3.getOutput('Guest_register', 'v865', ctc0, v865);
        const v871 = stdlib.safeAdd(v759, stdlib.checkedBigNumberify('./index.rsh:66:66:decimal', stdlib.UInt_max, '1'));
        const cv758 = false;
        const cv759 = v871;
        const cv760 = v832;
        
        v758 = cv758;
        v759 = cv759;
        v760 = cv760;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Host_checkin0_85': {
        const v901 = v831[1];
        undefined /* setApiDetails */;
        const v913 = v901[stdlib.checkedBigNumberify('./index.rsh:70:22:spread', stdlib.UInt_max, '0')];
        const v915 = stdlib.addressEq(v830, v745);
        stdlib.assert(v915, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:71:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:53:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
          msg: 'not the host',
          who: 'Admin'
          });
        const v917 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v913), null);
        const v918 = {
          None: 0,
          Some: 1
          }[v917[0]];
        const v919 = stdlib.eq(v918, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v919, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:72:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:53:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
          msg: 'no reservation',
          who: 'Admin'
          });
        ;
        const v942 = v901[stdlib.checkedBigNumberify('./index.rsh:70:22:spread', stdlib.UInt_max, '1')];
        const v952 = stdlib.ge(v832, v744);
        stdlib.assert(v952, {
          at: './index.rsh:76:48:application',
          fs: ['at ./index.rsh:75:39:application call to [unknown function] (defined at: ./index.rsh:75:39:function exp)'],
          msg: 'too early',
          who: 'Admin'
          });
        await stdlib.mapSet(map0, v913, undefined /* Nothing */);
        const v953 = v942 ? v913 : v745;
        ;
        null;
        const v958 = null;
        await txn3.getOutput('Host_checkin', 'v958', ctc0, v958);
        const v966 = stdlib.safeSub(v759, stdlib.checkedBigNumberify('./index.rsh:81:65:decimal', stdlib.UInt_max, '1'));
        const cv758 = true;
        const cv759 = v966;
        const cv760 = v832;
        
        v758 = cv758;
        v759 = cv759;
        v760 = cv760;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Guest_register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Guest_register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Guest_register3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Object({
    deadline: ctc3,
    host: ctc4,
    name: ctc5,
    reservation: ctc3
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc9 = stdlib.T_Data({
    Guest_register0_85: ctc7,
    Host_checkin0_85: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v740, v743, v744, v745, v758, v759] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc3, ctc3, ctc4, ctc1, ctc3]);
  const v778 = ctc.selfAddress();
  const v780 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:56:42:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to "runGuest_register0_85" (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
    msg: 'in',
    who: 'Guest_register'
    });
  const v781 = v758 ? false : true;
  stdlib.assert(v781, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:57:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:42:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to "runGuest_register0_85" (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
    msg: 'event started',
    who: 'Guest_register'
    });
  const v783 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v778), null);
  const v784 = {
    None: 0,
    Some: 1
    }[v783[0]];
  const v785 = stdlib.eq(v784, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v785, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:42:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to "runGuest_register0_85" (defined at: ./index.rsh:56:22:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
    msg: 'already registered',
    who: 'Guest_register'
    });
  const v790 = ['Guest_register0_85', v780];
  
  const txn1 = await (ctc.sendrecv({
    args: [v740, v743, v744, v745, v758, v759, v790],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v743, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v831], secs: v833, time: v832, didSend: v608, from: v830 } = txn1;
      
      switch (v831[0]) {
        case 'Guest_register0_85': {
          const v834 = v831[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Guest_register"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v830), null);
          sim_r.txns.push({
            amt: v743,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v830, true);
          null;
          const v865 = null;
          const v866 = await txn1.getOutput('Guest_register', 'v865', ctc0, v865);
          
          const v871 = stdlib.safeAdd(v759, stdlib.checkedBigNumberify('./index.rsh:66:66:decimal', stdlib.UInt_max, '1'));
          const v1381 = false;
          const v1382 = v871;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Host_checkin0_85': {
          const v901 = v831[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc3, ctc4, ctc1, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v831], secs: v833, time: v832, didSend: v608, from: v830 } = txn1;
  switch (v831[0]) {
    case 'Guest_register0_85': {
      const v834 = v831[1];
      undefined /* setApiDetails */;
      const v839 = v758 ? false : true;
      stdlib.assert(v839, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:57:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:42:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
        msg: 'event started',
        who: 'Guest_register'
        });
      const v841 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v830), null);
      const v842 = {
        None: 0,
        Some: 1
        }[v841[0]];
      const v843 = stdlib.eq(v842, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v843, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:58:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:56:42:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:56:42:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
        msg: 'already registered',
        who: 'Guest_register'
        });
      ;
      const v864 = stdlib.lt(v832, v744);
      stdlib.assert(v864, {
        at: './index.rsh:62:48:application',
        fs: ['at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
        msg: 'too late',
        who: 'Guest_register'
        });
      await stdlib.mapSet(map0, v830, true);
      null;
      const v865 = null;
      const v866 = await txn1.getOutput('Guest_register', 'v865', ctc0, v865);
      if (v608) {
        stdlib.protect(ctc0, await interact.out(v834, v866), {
          at: './index.rsh:56:23:application',
          fs: ['at ./index.rsh:56:23:application call to [unknown function] (defined at: ./index.rsh:56:23:function exp)', 'at ./index.rsh:65:44:application call to "ret" (defined at: ./index.rsh:61:39:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
          msg: 'out',
          who: 'Guest_register'
          });
        }
      else {
        }
      
      const v871 = stdlib.safeAdd(v759, stdlib.checkedBigNumberify('./index.rsh:66:66:decimal', stdlib.UInt_max, '1'));
      const v1381 = false;
      const v1382 = v871;
      return;
      
      break;
      }
    case 'Host_checkin0_85': {
      const v901 = v831[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Host_checkin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Host_checkin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Host_checkin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Object({
    deadline: ctc3,
    host: ctc4,
    name: ctc5,
    reservation: ctc3
    });
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Guest_register0_85: ctc8,
    Host_checkin0_85: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v740, v743, v744, v745, v758, v759] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc3, ctc3, ctc4, ctc1, ctc3]);
  const v792 = ctc.selfAddress();
  const v794 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:70:53:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to "runHost_checkin0_85" (defined at: ./index.rsh:70:22:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
    msg: 'in',
    who: 'Host_checkin'
    });
  const v795 = v794[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v799 = stdlib.addressEq(v792, v745);
  stdlib.assert(v799, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:53:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to "runHost_checkin0_85" (defined at: ./index.rsh:70:22:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
    msg: 'not the host',
    who: 'Host_checkin'
    });
  const v801 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v795), null);
  const v802 = {
    None: 0,
    Some: 1
    }[v801[0]];
  const v803 = stdlib.eq(v802, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v803, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:72:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:53:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to "runHost_checkin0_85" (defined at: ./index.rsh:70:22:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
    msg: 'no reservation',
    who: 'Host_checkin'
    });
  const v812 = ['Host_checkin0_85', v794];
  
  const txn1 = await (ctc.sendrecv({
    args: [v740, v743, v744, v745, v758, v759, v812],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:74:33:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v831], secs: v833, time: v832, didSend: v608, from: v830 } = txn1;
      
      switch (v831[0]) {
        case 'Guest_register0_85': {
          const v834 = v831[1];
          
          break;
          }
        case 'Host_checkin0_85': {
          const v901 = v831[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Host_checkin"
            });
          const v913 = v901[stdlib.checkedBigNumberify('./index.rsh:70:22:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v913), null);
          ;
          const v942 = v901[stdlib.checkedBigNumberify('./index.rsh:70:22:spread', stdlib.UInt_max, '1')];
          await stdlib.simMapSet(sim_r, 0, v913, undefined /* Nothing */);
          const v953 = v942 ? v913 : v745;
          sim_r.txns.push({
            kind: 'from',
            to: v953,
            tok: undefined /* Nothing */
            });
          null;
          const v958 = null;
          const v959 = await txn1.getOutput('Host_checkin', 'v958', ctc0, v958);
          
          const v966 = stdlib.safeSub(v759, stdlib.checkedBigNumberify('./index.rsh:81:65:decimal', stdlib.UInt_max, '1'));
          const v1399 = true;
          const v1400 = v966;
          const v1402 = stdlib.eq(v966, stdlib.checkedBigNumberify('./index.rsh:55:45:decimal', stdlib.UInt_max, '0'));
          if (v1402) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc3, ctc3, ctc4, ctc1, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v831], secs: v833, time: v832, didSend: v608, from: v830 } = txn1;
  switch (v831[0]) {
    case 'Guest_register0_85': {
      const v834 = v831[1];
      return;
      break;
      }
    case 'Host_checkin0_85': {
      const v901 = v831[1];
      undefined /* setApiDetails */;
      const v913 = v901[stdlib.checkedBigNumberify('./index.rsh:70:22:spread', stdlib.UInt_max, '0')];
      const v915 = stdlib.addressEq(v830, v745);
      stdlib.assert(v915, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:53:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
        msg: 'not the host',
        who: 'Host_checkin'
        });
      const v917 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v913), null);
      const v918 = {
        None: 0,
        Some: 1
        }[v917[0]];
      const v919 = stdlib.eq(v918, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v919, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:72:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:53:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:70:53:function exp)', 'at ./index.rsh:49:47:application call to [unknown function] (defined at: ./index.rsh:49:47:function exp)'],
        msg: 'no reservation',
        who: 'Host_checkin'
        });
      ;
      const v942 = v901[stdlib.checkedBigNumberify('./index.rsh:70:22:spread', stdlib.UInt_max, '1')];
      const v952 = stdlib.ge(v832, v744);
      stdlib.assert(v952, {
        at: './index.rsh:76:48:application',
        fs: ['at ./index.rsh:75:39:application call to [unknown function] (defined at: ./index.rsh:75:39:function exp)'],
        msg: 'too early',
        who: 'Host_checkin'
        });
      await stdlib.mapSet(map0, v913, undefined /* Nothing */);
      const v953 = v942 ? v913 : v745;
      ;
      null;
      const v958 = null;
      const v959 = await txn1.getOutput('Host_checkin', 'v958', ctc0, v958);
      if (v608) {
        stdlib.protect(ctc0, await interact.out(v901, v959), {
          at: './index.rsh:70:23:application',
          fs: ['at ./index.rsh:70:23:application call to [unknown function] (defined at: ./index.rsh:70:23:function exp)', 'at ./index.rsh:80:44:application call to "ret" (defined at: ./index.rsh:75:39:function exp)', 'at ./index.rsh:75:39:application call to [unknown function] (defined at: ./index.rsh:75:39:function exp)'],
          msg: 'out',
          who: 'Host_checkin'
          });
        }
      else {
        }
      
      const v966 = stdlib.safeSub(v759, stdlib.checkedBigNumberify('./index.rsh:81:65:decimal', stdlib.UInt_max, '1'));
      const v1399 = true;
      const v1400 = v966;
      const v1402 = stdlib.eq(v966, stdlib.checkedBigNumberify('./index.rsh:55:45:decimal', stdlib.UInt_max, '0'));
      if (v1402) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Guest_register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Guest_register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Guest_register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Guest_register3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Host_checkin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Host_checkin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Host_checkin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Host_checkin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Guest_register()byte[0]`, `Host_checkin(address,byte)byte[0]`],
    pure: [`Info_details()(uint64,address,byte[128],uint64)`, `Info_howMany()uint64`, `Info_reserved(address)byte`],
    sigs: [`Guest_register()byte[0]`, `Host_checkin(address,byte)byte[0]`, `Info_details()(uint64,address,byte[128],uint64)`, `Info_howMany()uint64`, `Info_reserved(address)byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByAIAAEDjuPllQjy96T1CpiO97kMp6OKwgUCJgQBAAABAQIAACI1ADEYQQLLKWRJIls1AYEIWzUCMRkjEkEACDEAKCtmQgKZNhoAF0lBAJciNQQjNQZJJQxAAExJIQQMQAAySSEFDEAAEiEFEkQpNf8oNP9QgSGvUEIAgyEEEkQ0ASQSRChkKmRQSTUDV+EINQdCAlslEkQ2GgE2GgJQNf8qNP9QQgBXSSEGDEAAGSEGEkQ0ASQSRChkKmRQSTUDVwCwNQdCAiiB+MKNahJENAEkEkQ2GgGIAjsiVSMSFlEHCDUHQgIJNhoCFzUENhoDNhoBF0khBwxAARchBxJEJDQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSUpJVwCwNf+BsAFbNf6BuAFbNf1XwCA1/IHhAVs1+0k1BTX6gAT22XKFNPpQsDT6IlVAAE80A1fgARcURDEAiAG8IlUiEkQ0/ogBvzIGNP0MRDEAKIACAQFmgAQfcUPNMQBQsIAIAAAAAAAAA2GwKTUHNP80/jT9NPwiNPsjCDIGQgDBNPpXASE1+TT5VwAgNfgxADT8EkQ0+IgBYSJVIxJENPlXIAEXNfcyBjT9D0Q0+CgrZrEisgE0/rIII7IQNPw0+DT3TbIHs4AERwmv+zT4UDT3FlEHCFCwgAgAAAAAAAADvrApNQc0/zT+NP00/CM0+yMJMgZCAEoiEkSBoI0GiAEGIjQBEkQ0BEkiEkw0AhIRREk1BTX/gATk+KMnNP9QsDT/Ils1/jIGNP4MRDT/SYGoAVs0/jT/VwggIiIyBkIAADX/Nf41/TX8Nfs1+jX5NP00/iISEEEAA0IAMTT5NPoWUDT7FlA0/FA0/RZRBwhQNP4WUChLAVcAf2cqSwFXf2pnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAAA0griShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 2,
  stateSize: 233,
  unsupported: [],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"address payable","name":"_host","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T1","name":"_name","type":"tuple"},{"internalType":"uint256","name":"_reservation","type":"uint256"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"v1423","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"address payable","name":"_host","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T1","name":"_name","type":"tuple"},{"internalType":"uint256","name":"_reservation","type":"uint256"}],"internalType":"struct T2","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Guest_register0_85","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T4","name":"_Host_checkin0_85","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v865","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v958","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"bool","name":"v1","type":"bool"}],"name":"checkin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"register","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Guest_register","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v1416","type":"address"},{"internalType":"bool","name":"v1417","type":"bool"}],"name":"Host_checkin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Info_details","outputs":[{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"internalType":"address payable","name":"_host","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T1","name":"_name","type":"tuple"},{"internalType":"uint256","name":"_reservation","type":"uint256"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_howMany","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v1409","type":"address"}],"name":"Info_reserved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"internalType":"bool","name":"_Guest_register0_85","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T4","name":"_Host_checkin0_85","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v1428","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f196001600160401b03608062001a1738819003601f810185168301848111848210176200047f5783928291604052833981010390610100821262000506576040519060408201828110858211176200047f576040528051825260e08584011262000506576040519262000074846200050b565b602082015184526040820151906001600160a01b038216820362000506576080916020860152605f190112620005065760e090604051620000b5816200050b565b606082015181526080820151602082015260a0820151604082015260c082015160608201526040850152015160608301526020810191825243600355600060a0604051620001038162000527565b8281528260208201528260408201526200011c62000543565b6060820152826080820152015260ff60045416620004ed577f8a5f2f3b0ad42fedc6e4283175ba976c3e00362ff233289084b9a196052adb9e6101206040513381528351602082015262000176855160408301906200058c565ba1518015908115620004e0575b5015620004c75734620004ae5780515143101562000495576040519060e08201828110848211176200047f57604052620001bc62000543565b825260006020830152600060408301526000606083015260006080830152600060a083015260c0820190600082528051835260608151015160208401528051516040840152602060018060a01b039151015116606083015243905260405190620002268262000527565b6200023062000543565b825260006020830152600060408301526000606083015260006080830152600060a083015260a08151918284526020810151602085015260408101516040850152600180831b036060820151166060850152608081015115156080850152015160a0830152600360005560a0600192438455620002b56040519360208501906200058c565b60208101516101008401526040810151610120840152600180831b03606082015116610140840152608081015115156101608401520151610180908183015281526101a08101818110848211176200047f5760405280519283116200047f576002548281811c9116801562000474575b60208210146200045e57601f8111620003f1575b50602090601f84116001146200038857839450908392916000946200037c575b50501b916000199060031b1c1916176002555b6040516114419081620005d68239f35b01519250388062000359565b919383169160026000528360206000209360005b87828210620003d757505010620003bd575b505050811b016002556200036c565b015160001960f88460031b161c19169055388080620003ae565b84860151875590950194602094850194879350016200039c565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f850160051c8101916020861062000453575b601f0160051c019083905b8281106200044657505062000339565b6000815501839062000436565b90915081906200042b565b634e487b7160e01b600052602260045260246000fd5b90607f169062000325565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b9050600154143862000183565b60405163100960cb60e01b8152600a6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200047f57604052565b60c081019081106001600160401b038211176200047f57604052565b6040519062000552826200050b565b8160606000918281528260208201526040516200056f816200050b565b838152836020820152836040820152838382015260408201520152565b606060c0918051845260018060a01b0360208201511660208501528160408201518051604087015260208101518287015260408101516080870152015160a0850152015191015256fe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c90816312848ad41461047a57816316674bfa146104035781631e93b0f1146103e457816336e56ea51461037b5781633c4c9a96146103305781638323075714610311578163ab53f2c6146102a5578163ad8c7f771461023c578163c450a39d14610156575063d39c6184036100115780600319360112610152576100a761050f565b9160243592831515809403610152579061014783926100c461080a565b9283918551906100d3826105cd565b6001600160a01b0390811682526020828101998a528751909990916100f7836105cd565b8851610102816105cd565b858152858c82015283528a830193610118610842565b855251168251525115158982510152600182515251868251015261013a610878565b91825251878201526109e4565b015115159051908152f35b5080fd5b838360a03660031901126101525761016c61080a565b92815190610179826105cd565b8035825260803660231901126102215782519060608201906001600160401b038211838310176102295750835260243560028110156102255781526044358015158103610225576020820152826063193601126102215782516101db816105cd565b6064356001600160a01b038116810361021d578152608435801515810361021d57918160209793886102179694015285820152868201526109e4565b51908152f35b8580fd5b8380fd5b8480fd5b634e487b7160e01b865260419052602485fd5b83915034610152578160031936011261015257600361025961080a565b92540361028e5760206080848460a061028161027361066b565b8680825183010191016108ad565b0151928391015251908152f35b602490600884519163100960cb60e01b8352820152fd5b50503461015257816003193601126101525781546102c161066b565b91805193849283526020828185015284518093850152815b8381106102fa57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016102d9565b5050346101525781600319360112610152576020906001549051908152f35b505081600319360112610152576020809261014761034c61080a565b8092610356610878565b8581019082825152511515868251015261036e610878565b91825251858201526109e4565b9050346103e05760203660031901126103e05735916001600160a01b03831683036103dd57506103b56060926103af610720565b5061073f565b908080519280516103c581610573565b84526020810151151560208501520151151590820152f35b80fd5b8280fd5b5050346101525781600319360112610152576020906003549051908152f35b8391503461015257816003193601126101525761041e6107c5565b50600361042961080a565b9254036104635760e06060610461858561045361044461066b565b602080825183010191016108ad565b51938491015251809261052a565bf35b602490600784519163100960cb60e01b8352820152fd5b839150346101525760203660031901126101525761049661050f565b9060036104a161080a565b9354036104f857602060a0858560016104d9876104cd6104bf61066b565b8880825183010191016108ad565b508280871b031661073f565b516104e381610573565b6104ec81610573565b14928391015251908152f35b602490600985519163100960cb60e01b8352820152fd5b600435906001600160a01b038216820361052557565b600080fd5b606060c0918051845260018060a01b0360208201511660208501528160408201518051604087015260208101518287015260408101516080870152015160a08501520151910152565b6002111561057d57565b634e487b7160e01b600052602160045260246000fd5b90600182811c921680156105c3575b60208310146105ad57565b634e487b7160e01b600052602260045260246000fd5b91607f16916105a2565b604081019081106001600160401b038211176105e857604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176105e857604052565b608081019081106001600160401b038211176105e857604052565b60c081019081106001600160401b038211176105e857604052565b6101a081019081106001600160401b038211176105e857604052565b60405190600060025461067d81610593565b80855260019180831690811561070157506001146106bb575b5050829003601f01601f191682016001600160401b038111838210176105e857604052565b600260009081526020935091836000805160206113f58339815191525b8385106106ed57505050508301013880610696565b8054888601830152930192849082016106d8565b919250506020925060ff191682850152151560051b8301013880610696565b6040519061072d826105fe565b60006040838281528260208201520152565b90610748610720565b9160018060a01b03166000908082526005602052600160ff60408420541661076f81610573565b036107ba576040929350815260056020522060ff60405191610790836105fe565b5481811661079d81610573565b8352818160081c161515602084015260101c161515604082015290565b508083526020830152565b604051906107d282610619565b8160606000918281528260208201526040516107ed81610619565b838152836020820152836040820152838382015260408201520152565b6040519061081782610634565b600060a0838281528260208201528260408201526108336107c5565b60608201528260808201520152565b6040519061084f826105fe565b8160008152600060208201526040805191610869836105cd565b60008352600060208401520152565b60405190610885826105cd565b81600081526020610894610842565b910152565b51906001600160a01b038216820361052557565b80910390610180821261052557604080519260c08401906001600160401b038211858310176105e85781835260e08112610525576080906108ed83610619565b845183526108fd60208601610899565b60e0870152603f190112610525578161096d925161091a81610619565b8185015181526060850151602082015260808501518282015260a08501516060820152610100908187015260c0850151926101209384880152865260e08501516020870152840151908501528201610899565b606083015261014081015190811515820361052557610160916080840152015160a082015290565b6040519060e082016001600160401b038111838210176105e857604052816109bb6107c5565b815260c06000918260208201528260408201528260608201528260808201528260a08201520152565b604051909190602081016001600160401b038111828210176105e85780604052610a0d816105cd565b6000815260006040830152815260ff600454166113c457604051338152835160208201527f60affd84a43f8d111b33fbe17ab21494fcb0e492a4f77f29363ca8e3c582d34760c060208601926020604085518051610a6a81610573565b848301528083015115156060850152015180516001600160a01b031660808401520151151560a0820152a16003600054036113ab57610aaa61044461066b565b9351801590811561139f575b501561138657805151610ac881610573565b610ad181610573565b610edb575050608082015115610ed45760005b15610ebb57610af23361073f565b51610afc81610573565b610b0581610573565b610ea25760208201513403610e89576040820151431015610e7057336000818152600560209081526040808320805462ff00ff19166201000117905551928352909290917f4420e4869750c98a56ac621854d2d00e598698ac87193cdfcbb6ed1164e9cbcd908390a17f68067ea38b7dabaccbfa1b9e310e04535c1d2fabe8e1a30cccb1bbb345a15c9782604051858152a1015260a0610ba3610995565b91805183526020810151602084015260408101516040840152600180831b036060820151166060840152600060808401520151600181018111610e5a57806001810110610525576001810160a08301524360c0830152608082015115610e5257600101155b15610c7d5750600080556000600155610c22600254610593565b80610c2a5750565b601f8111600114610c3d57506000600255565b6002600052610c7090601f0160051c6000805160206113f5833981519152016000805160206114158339815191526113dd565b6000602081208160025555565b9060405191610c8b83610634565b610c936107c5565b83526020830160008152604084016000815260608501906000825260808601926000845260a0808801956000875280518099526020810151835260408101518452600180831b03606082015116855260808101511515865201518552600360005543600155610d0960405197602089019061052a565b5161010087015251610120860152516001600160a01b031661014085015251151561016084015251610180808401919091528252610d468261064f565b81516001600160401b0381116105e857610d61600254610593565b601f8111610e0a575b50602092601f8211600114610da75792819293600092610d9c575b50508160011b916000199060031b1c191617600255565b015190503880610d85565b601f19821693600260005260206000209160005b868110610df25750836001959610610dd9575b505050811b01600255565b015160001960f88460031b161c19169055388080610dce565b91926020600181928685015181550194019201610dbb565b6002600052610e42906000805160206113f5833981519152601f840160051c81019160208510610e48575b601f0160051c01906113dd565b38610d6a565b9091508190610e35565b506000610c08565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b6001610ae4565b600181949293945151610eed81610573565b610ef681610573565b14610f02575b50505050565b516040015182526060810180516001600160a01b0316330361136d57825151600190610f36906001600160a01b031661073f565b51610f4081610573565b610f4981610573565b03611354573461133b576040820180514310611322578351516001600160a01b031660009081526005602090815260408220919091558451908101511561131057516001600160a01b0316945b600080808060208801998a519082908215611306575b6001600160a01b031690f1156112fa5760406000917f2f4020bff992174fa318eefe15bd68b9ed933f2e5e050f3746d586714693efd18260a0985160206001808c1b03825116910151151582519182526020820152a17fda3c880b597adf1cade6e8d926ad27d4c6cee8ef43dcf17242cf1e5c0c8f044a60208351858152a10152611035610995565b9483518652516020860152516040850152600180841b03905116606084015260016080840152015180600019810111610e5a57600019810160a08301524360c08301526080820151156112f25760001901155b1561110e57506000805560006001556110a2600254610593565b806110b3575b505b38808080610efc565b601f81116001146110cb575060006002555b386110a8565b60026000526110fe90601f0160051c6000805160206113f5833981519152016000805160206114158339815191526113dd565b60006020812081600255556110c5565b9060a060405161111d81610634565b6111256107c5565b815260006020820152600060408201526000606082015260006080820152600082820152818451948583526020810151602084015260408101516040840152600180831b0360608201511660608401526080810151151560808401520151828201526003600055436001556111a160405194602086019061052a565b60208101516101008501526040810151610120850152600180831b03606082015116610140850152608081015115156101608501520151610180908184015282526111eb8261064f565b81516001600160401b0381116105e857611206600254610593565b601f81116112b5575b50602092601f821160011461124f5792819293600092611244575b50508160011b916000199060031b1c1916176002556110aa565b01519050388061122a565b601f19821693600260005260206000209160005b86811061129d5750836001959610611284575b505050811b016002556110aa565b015160001960f88460031b161c19169055388080611276565b91926020600181928685015181550194019201611263565b60026000526112ec906000805160206113f5833981519152601f840160051c81019160208510610e4857601f0160051c01906113dd565b3861120f565b506000611088565b6040513d6000823e3d90fd5b6108fc9150610fac565b5081516001600160a01b031694610f96565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b90506001541438610ab6565b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b8181106113e8575050565b600081556001016113dd56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acfa164736f6c6343000810000a`,
  BytecodeLen: 6679,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:85:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:49:47:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Guest_register": Guest_register,
  "Host_checkin": Host_checkin
  };
export const _APIs = {
  Guest: {
    register: Guest_register
    },
  Host: {
    checkin: Host_checkin
    }
  };
