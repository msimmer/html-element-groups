const should      = require('chai').should()
const elements    = require('./index')
const sectioning  = require('./elements/sectioning')
const text        = require('./elements/text')
const inline      = require('./elements/inline')
const demarcating = require('./elements/demarcating')
const tabular     = require('./elements/tabular')
const form        = require('./elements/form')
const interactive = require('./elements/interactive')
const deprecated  = require('./elements/deprecated')

describe('setup', () => {
    it('should ensure that our control arrays are valid', () => {
        sectioning.should.be.an('array').and.have.lengthOf.at.least(1)
        text.should.be.an('array').and.have.lengthOf.at.least(1)
        inline.should.be.an('array').and.have.lengthOf.at.least(1)
        demarcating.should.be.an('array').and.have.lengthOf.at.least(1)
        tabular.should.be.an('array').and.have.lengthOf.at.least(1)
        form.should.be.an('array').and.have.lengthOf.at.least(1)
        interactive.should.be.an('array').and.have.lengthOf.at.least(1)
        deprecated.should.be.an('array').and.have.lengthOf.at.least(1)
    })
})

describe('groups', () => {
    describe('#sectioning', () => {
        it('should match the export from [./elements/sectioning]', () => {
            elements.sectioning.should.include.members([...sectioning]).and.be.an('array')
        })
    })
    describe('#text', () => {
        it('should match the export from [./elements/text]', () => {
            elements.text.should.include.members([...text]).and.be.an('array')
        })
    })
    describe('#inline', () => {
        it('should match the export from [./elements/inline]', () => {
            elements.inline.should.include.members([...inline]).and.be.an('array')
        })
    })
    describe('#demarcating', () => {
        it('should match the export from [./elements/demarcating]', () => {
            elements.demarcating.should.include.members([...demarcating]).and.be.an('array')
        })
    })
    describe('#tabular', () => {
        it('should match the export from [./elements/tabular]', () => {
            elements.tabular.should.include.members([...tabular]).and.be.an('array')
        })
    })
    describe('#form', () => {
        it('should match the export from [./elements/form]', () => {
            elements.form.should.include.members([...form]).and.be.an('array')
        })
    })
    describe('#interactive', () => {
        it('should match the export from [./elements/interactive]', () => {
            elements.interactive.should.include.members([...interactive]).and.be.an('array')
        })
    })
    describe('#deprecated', () => {
        it('should match the export from [./elements/deprecated]', () => {
            elements.deprecated.should.include.members([...deprecated]).and.be.an('array')
        })
    })
})

describe('lists', () => {
    describe('#names', () => {
        it('should be an array that includes all element names, except for those in [deprecated]', () => {
            elements.names.should.be.an('array')
            elements.names.should.include.all.members([...sectioning, ...text, ...inline, ...demarcating, ...tabular, ...form, ...interactive])
            elements.names.should.not.include.members([...deprecated])
        })
    })
    describe('#namesIncludingDeprecated', () => {
        it('should be an array that includes all element names, including those in [deprecated]', () => {
            elements.namesIncludingDeprecated.should.be.an('array')
            elements.namesIncludingDeprecated.should.include.all.members([...sectioning, ...text, ...inline, ...demarcating, ...tabular, ...form, ...interactive, ...deprecated])
        })
    })
})

describe('methods', () => {
    describe('#include()', () => {
        it('should include the properties provided in an array of parameters', () => {
            elements.include(['sectioning', 'text']).should.include.members([...sectioning, ...text])
            elements.include(['sectioning', 'text']).should.not.include.members([...inline])
        })
    })
    describe('#exclude()', () => {
        it('should exclude the properties provided in an array of parameters', () => {
            elements.exclude(['sectioning', 'text']).should.not.include.members([...sectioning, ...text])
            elements.exclude(['sectioning', 'text']).should.include.members([...inline])
        })
    })
})

describe('versioning', () => {
    describe('#timestamp', () => {
        it('should be a valid date in UNIX time', () => {
            String(new Date(elements.timestamp)).should.match(/[A-Z][a-z]{2} \d{2} \d{4} \d{2}:\d{2}:\d{2} [A-Z]{3}/)
        })
    })
})
